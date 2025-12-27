/**
 * Template Name: Personal - v2.1.0
 * Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function ($) {
  "use strict";

  /* ===============================
     Resume Fullscreen
  ================================ */
  window.openFullscreen = function () {
    var iframe = document.getElementById("resumeFrame");
    if (!iframe) return;

    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.borderRadius = "0";

    if (iframe.requestFullscreen) iframe.requestFullscreen();
    else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
    else if (iframe.msRequestFullscreen) iframe.msRequestFullscreen();
  };

  /* ===============================
     NAVIGATION CLICK (DESKTOP + MOBILE)
  ================================ */
  $(document).on("click", ".nav-menu a, .mobile-nav a", function (e) {
    var hash = this.hash;

    // HOME
    if (hash === "" || hash === "#") {
      e.preventDefault();

      $("#header").removeClass("header-top");
      $("section").removeClass("section-show");

      $(".nav-menu .active, .mobile-nav .active").removeClass("active");
      $(this).parent().addClass("active");

      $("body").removeClass("mobile-nav-active");
      $(".mobile-nav-overly").fadeOut();
      return;
    }

    // OTHER SECTIONS
    if ($(hash).length) {
      e.preventDefault();

      $("#header").addClass("header-top");
      $("section").removeClass("section-show");
      $(hash).addClass("section-show");

      $(".nav-menu .active, .mobile-nav .active").removeClass("active");
      $(this).parent().addClass("active");

      $("body").removeClass("mobile-nav-active");
      $(".mobile-nav-overly").fadeOut();
    }
  });


  /* ===============================
     LOAD SECTION FROM URL HASH
  ================================ */
  if (window.location.hash) {
    var initialSection = window.location.hash;
    if ($(initialSection).length) {
      $("#header").addClass("header-top");

      setTimeout(function () {
        $("section").removeClass("section-show");
        $(initialSection).addClass("section-show");

        $(".nav-menu .active").removeClass("active");
        $('.nav-menu a[href="' + initialSection + '"]')
          .parent()
          .addClass("active");
      }, 300);
    }
  }

  /* ===============================
     MOBILE NAVIGATION
  ================================ */
  if ($(".nav-menu").length) {
    var $mobileNav = $(".nav-menu").clone().prop({
      class: "mobile-nav d-lg-none",
    });

    $("body").append($mobileNav);
    $("body").prepend(
      '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
    );
    $("body").append('<div class="mobile-nav-overly"></div>');

    $(document).on("click", ".mobile-nav-toggle", function () {
      $("body").toggleClass("mobile-nav-active");
      $(".mobile-nav-overly").fadeToggle();
      $(".mobile-nav-toggle i").toggleClass(
        "icofont-navigation-menu icofont-close"
      );
    });

    $(document).on("click", function (e) {
      if (
        !$(e.target).closest(".mobile-nav, .mobile-nav-toggle").length
      ) {
        $("body").removeClass("mobile-nav-active");
        $(".mobile-nav-overly").fadeOut();
        $(".mobile-nav-toggle i")
          .removeClass("icofont-close")
          .addClass("icofont-navigation-menu");
      }
    });
  }

  /* ===============================
     PORTFOLIO ISOTOPE
  ================================ */
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
    });
  });

  /* ===============================
     VENOBOX
  ================================ */
  $(document).ready(function () {
    $(".venobox").venobox();
  });

})(jQuery);
