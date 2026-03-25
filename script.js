const CITY_DATA = {
  palmCoast: {
    label: "Palm Coast",
    coords: [29.5845, -81.2079],
    zoom: 10,
  },
  daytonaBeach: {
    label: "Daytona Beach",
    coords: [29.2108, -81.0228],
    zoom: 10,
  },
  orlando: {
    label: "Orlando",
    coords: [28.5383, -81.3792],
    zoom: 10,
  },
};

const initRevealObserver = () => {
  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
};

const initHeroParallax = () => {
  const mediaLayers = document.querySelectorAll(".hero-media");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const handleScroll = () => {
    const offset = window.scrollY * 0.12;
    mediaLayers.forEach((layer) => {
      layer.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
    });
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
};

const initWeather = async () => {
  const target = document.querySelector("[data-weather]");

  if (!target) {
    return;
  }

  const { label, coords } = CITY_DATA.palmCoast;

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords[0]}&longitude=${coords[1]}&current=temperature_2m&temperature_unit=fahrenheit`
    );

    if (!response.ok) {
      throw new Error("Weather request failed");
    }

    const data = await response.json();
    const temp = Math.round(data.current.temperature_2m);
    const latitude = `${Math.abs(coords[0]).toFixed(2)}°${coords[0] >= 0 ? "N" : "S"}`;
    const longitude = `${Math.abs(coords[1]).toFixed(2)}°${coords[1] >= 0 ? "E" : "W"}`;

    target.textContent = `${label}, FL · ${temp}°F · ${latitude} / ${longitude}`;
  } catch (error) {
    target.textContent = `${label}, FL · 29.58°N / 81.21°W`;
  }
};

const initFilmStrip = () => {
  const rail = document.querySelector("[data-film-strip]");

  if (!rail) {
    return;
  }
};

const bindComparisonSlider = (slider) => {
  const beforeLayer = slider.querySelector(".comparison-before");
  const handle = slider.querySelector(".comparison-handle");

  if (!beforeLayer || !handle) {
    return;
  }

  const setPosition = (value) => {
    const safeValue = Math.min(90, Math.max(10, value));
    beforeLayer.style.width = `${safeValue}%`;
    handle.style.left = `${safeValue}%`;
    slider.dataset.position = String(safeValue);
  };

  setPosition(Number(slider.dataset.position || 50));

  let dragging = false;

  const updateFromClientX = (clientX) => {
    const bounds = slider.getBoundingClientRect();
    const ratio = (clientX - bounds.left) / bounds.width;
    setPosition(ratio * 100);
  };

  const startDrag = (event) => {
    dragging = true;
    slider.classList.add("is-dragging");
    updateFromClientX(event.clientX);
    handle.setPointerCapture?.(event.pointerId);
  };

  const moveDrag = (event) => {
    if (!dragging) {
      return;
    }
    updateFromClientX(event.clientX);
  };

  const stopDrag = (event) => {
    if (!dragging) {
      return;
    }
    dragging = false;
    slider.classList.remove("is-dragging");
    handle.releasePointerCapture?.(event.pointerId);
  };

  slider.addEventListener("pointerdown", startDrag);
  slider.addEventListener("pointermove", moveDrag);
  slider.addEventListener("pointerup", stopDrag);
  slider.addEventListener("pointerleave", stopDrag);
  slider.addEventListener("pointercancel", stopDrag);
  handle.addEventListener("keydown", (event) => {
    const current = Number(slider.dataset.position || 50);

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition(current - 5);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition(current + 5);
    }
  });
};

const initComparisons = () => {
  document
    .querySelectorAll(".comparison-slider")
    .forEach((slider) => bindComparisonSlider(slider));
};

const initForms = () => {
  document.querySelectorAll(".lead-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector(".form-status");

      if (status) {
        status.textContent = "Thanks. We’ll reach out shortly to schedule your estimate.";
      }

      form.reset();
    });
  });
};

const initMap = () => {
  if (typeof L === "undefined") {
    return;
  }

  const mapNode = document.getElementById("service-map");

  if (!mapNode) {
    return;
  }

  const map = L.map(mapNode, {
    zoomControl: false,
    scrollWheelZoom: false,
  }).setView(CITY_DATA.palmCoast.coords, 8);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    subdomains: "abcd",
    maxZoom: 20,
  }).addTo(map);

  Object.values(CITY_DATA).forEach((city) => {
    L.circleMarker(city.coords, {
      radius: 7,
      color: "#FF6B35",
      weight: 1,
      fillColor: "#00E5C0",
      fillOpacity: 0.85,
    })
      .addTo(map)
      .bindPopup(`<strong>${city.label}</strong><br />Serving this area`);
  });

  const activateCity = (cityKey) => {
    const city = CITY_DATA[cityKey];

    if (!city) {
      return;
    }

    map.flyTo(city.coords, city.zoom, {
      duration: 1.4,
      easeLinearity: 0.2,
    });

    document.querySelectorAll(".city-pill").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.city === cityKey);
    });
  };

  document.querySelectorAll(".city-pill").forEach((button) => {
    button.addEventListener("click", () => activateCity(button.dataset.city));
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initRevealObserver();
  initHeroParallax();
  initWeather();
  initFilmStrip();
  initComparisons();
  initForms();
  initMap();
});
