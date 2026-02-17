"use client";

import { useEffect } from "react";

export default function NifScripts() {
  useEffect(() => {
    // ========== NAVBAR SCROLL BEHAVIOR ==========
    const navbar = document.getElementById("mainNav");
    if (!navbar) return;

    function handleNavbarScroll() {
      if (window.scrollY > 80) {
        navbar!.classList.add("scrolled");
      } else {
        navbar!.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", handleNavbarScroll);
    handleNavbarScroll();

    // ========== SMOOTH SCROLLING FOR ANCHOR LINKS ==========
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        const targetId = (anchor as HTMLAnchorElement).getAttribute("href");
        if (targetId === "#") return;
        const target = document.querySelector(targetId!);
        if (target) {
          e.preventDefault();
          const navHeight = navbar!.offsetHeight + 10;
          const targetPos =
            target.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({ top: targetPos, behavior: "smooth" });
        }
      });
    });

    // ========== CLOSE MOBILE MENU ON LINK CLICK ==========
    const navbarCollapse = document.querySelector(".navbar-collapse");
    document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const bsCollapse = (window as any).bootstrap?.Collapse?.getInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      });
    });

    // ========== BACK TO TOP BUTTON ==========
    const backToTopBtn = document.getElementById("backToTop");
    if (backToTopBtn) {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
          backToTopBtn.classList.add("visible");
        } else {
          backToTopBtn.classList.remove("visible");
        }
      });
      backToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // ========== NIF SCROLL REVEAL ==========
    const nifReveals = document.querySelectorAll(".nif-reveal");
    if (nifReveals.length > 0) {
      if ("IntersectionObserver" in window) {
        const nifRevealObserver = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                nifRevealObserver.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );
        nifReveals.forEach(function (el) {
          nifRevealObserver.observe(el);
        });
      } else {
        nifReveals.forEach(function (el) {
          el.classList.add("visible");
        });
      }
    }

    // ========== NIF ANIMATED COUNTERS ==========
    const nifCounters = document.querySelectorAll(".nif-counter");
    let nifCounterStarted = false;

    function nifAnimateCounters() {
      nifCounters.forEach(function (counter) {
        const target = parseInt(counter.getAttribute("data-target") || "0", 10);
        const duration = 2000;
        let startTime: number | null = null;

        function step(timestamp: number) {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime!) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          counter.textContent = String(Math.floor(eased * target));
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            counter.textContent = String(target);
          }
        }
        requestAnimationFrame(step);
      });
    }

    if (nifCounters.length > 0 && "IntersectionObserver" in window) {
      const nifCounterObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting && !nifCounterStarted) {
              nifCounterStarted = true;
              nifAnimateCounters();
              nifCounterObserver.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      nifCounters.forEach(function (c) {
        nifCounterObserver.observe(c);
      });
    }

    // ========== NIF FAQ ACCORDION ==========
    const nifFaqItems = document.querySelectorAll(".nif-faq-item");
    if (nifFaqItems.length > 0) {
      nifFaqItems.forEach(function (item) {
        const btn = item.querySelector(".nif-faq-question");
        if (!btn) return;
        btn.addEventListener("click", function () {
          const isActive = item.classList.contains("active");
          nifFaqItems.forEach(function (other) {
            other.classList.remove("active");
            const otherAnswer = other.querySelector(".nif-faq-answer") as HTMLElement;
            if (otherAnswer) otherAnswer.style.maxHeight = "";
            const otherBtn = other.querySelector(".nif-faq-question");
            if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          });
          if (!isActive) {
            item.classList.add("active");
            const answer = item.querySelector(".nif-faq-answer") as HTMLElement;
            if (answer) answer.style.maxHeight = answer.scrollHeight + "px";
            btn.setAttribute("aria-expanded", "true");
          }
        });
      });
    }

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleNavbarScroll);
    };
  }, []);

  return null;
}
