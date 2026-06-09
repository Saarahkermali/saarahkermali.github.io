(function () {
  window.Components = window.Components || {};

  const ENTER = { opacity: 0, y: -20, rotationX: 5, skewX: "15deg" };
  const LEAVE = { opacity: 0, y: 20, rotationY: 5, skewX: "-15deg" };

  window.Components.ideas = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-ideas";

      const lines = section.lines || [];

      lines.forEach((line, i) => {
        const isLast = i === lines.length - 1;

        const p = document.createElement("p");
        p.className = isLast ? "idea-line idea-special" : "idea-line";
        p.innerHTML = line;
        div.appendChild(p);
      });

      // Big letters
      if (section.bigLetters) {
        const p = document.createElement("p");
        p.className = "idea-big-letters";

        p.innerHTML = section.bigLetters
          .split("")
          .map((ch) => `<span>${ch}</span>`)
          .join("");

        div.appendChild(p);
      }

      container.appendChild(div);
      return div;
    },

    animate(tl, el, CONFIG) {
      const section = this.section || {};
      const speed = section.speed || 0.5;

      const regularLines = el.querySelectorAll(
        ".idea-line:not(.idea-special)"
      );

      const specialLine = el.querySelector(".idea-special");
      const bigLetters = el.querySelectorAll(".idea-big-letters span");

      // ─────────────────────────────
      // REGULAR LINES (SEQUENTIAL)
      // ─────────────────────────────
      regularLines.forEach((line) => {
        tl.fromTo(
          line,
          ENTER,
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            skewX: "0deg",
            duration: 0.5,
          }
        ).to(line, {
          ...LEAVE,
          duration: 0.4,
          delay: speed, // controls pacing properly
        });
      });

      // ─────────────────────────────
      // SPECIAL LINE
      // ─────────────────────────────
      if (specialLine) {
        tl.fromTo(
          specialLine,
          {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            opacity: 0,
          },
          {
            rotationX: 0,
            rotationZ: 0,
            skewY: "0deg",
            y: 0,
            opacity: 1,
            duration: 0.7,
          }
        ).to(specialLine, {
          scale: 0.3,
          opacity: 0,
          duration: 0.6,
          delay: speed,
        });
      }

      // ─────────────────────────────
      // BIG LETTERS
      // ─────────────────────────────
      if (bigLetters.length) {
        tl.fromTo(
          bigLetters,
          {
            scale: 3,
            opacity: 0,
            rotation: 15,
          },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.6,
            ease: "expo.out",
            stagger: 0.15,
          }
        ).to(bigLetters, {
          scale: 3,
          opacity: 0,
          rotation: -15,
          duration: 0.6,
          delay: speed,
          stagger: 0.1,
        });
      }
    },
  };
})();