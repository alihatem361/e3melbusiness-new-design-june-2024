/**
 * User Profile Page JS
 * Handles tab navigation, sub-tabs, file upload, filter toggles, and interactive behaviors
 */
$(function () {
  'use strict';

  // ============================================================
  // Main Tab Navigation
  // ============================================================
  const $mainTabs = $('#up_main_tabs .up-tab-btn');
  const $tabContents = $('.up-tab-content');

  $mainTabs.on('click', function () {
    const tabId = $(this).data('tab');

    // Update active tab button
    $mainTabs.removeClass('active');
    $(this).addClass('active');

    // Show corresponding content
    $tabContents.addClass('d-none');
    $('#' + tabId).removeClass('d-none');

    // Scroll to top of content
    $('html, body').animate({ scrollTop: $('#' + tabId).offset().top - 80 }, 300);
  });

  // ============================================================
  // File Upload (Profile Avatar)
  // ============================================================
  const $fileUploadArea = $('#file_upload_area');
  const $fileInput = $('#profile_file_input');

  $fileUploadArea.on('click', function () {
    $fileInput.trigger('click');
  });

  // Drag and drop
  $fileUploadArea.on('dragover', function (e) {
    e.preventDefault();
    $(this).addClass('dragover');
  });

  $fileUploadArea.on('dragleave drop', function (e) {
    e.preventDefault();
    $(this).removeClass('dragover');
  });

  $fileUploadArea.on('drop', function (e) {
    e.preventDefault();
    const files = e.originalEvent.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  });

  $fileInput.on('change', function () {
    if (this.files && this.files[0]) {
      handleFileUpload(this.files[0]);
    }
  });

  function handleFileUpload(file) {
    if (!file.type.startsWith('image/')) {
      alert('يرجى اختيار ملف صورة');
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      // Update avatar preview
      $('.avatar-preview').attr('src', e.target.result);
      // Update profile cover avatar
      $('.profile-avatar').attr('src', e.target.result);
      // Update upload area text
      $fileUploadArea.find('.upload-link').text(file.name);
    };
    reader.readAsDataURL(file);
  }

  // ============================================================
  // Toggle Switches - visual only (form would handle actual save)
  // ============================================================
  $('.up-toggle-switch input[type="checkbox"]').on('change', function () {
    // Toggle animation is handled by CSS
    // In a real app, this would trigger an API call
  });

  // ============================================================
  // Save & Cancel Buttons
  // ============================================================
  $('.btn-save').on('click', function () {
    // Placeholder: show success feedback
    const $btn = $(this);
    const originalText = $btn.text();
    $btn.text('جاري الحفظ...').prop('disabled', true);

    setTimeout(function () {
      $btn.text('تم الحفظ ✓');
      setTimeout(function () {
        $btn.text(originalText).prop('disabled', false);
      }, 1500);
    }, 800);
  });

  $('.btn-cancel').on('click', function () {
    // Placeholder: reset form to original values
    if (confirm('هل أنت متأكد من إلغاء التغييرات؟')) {
      location.reload();
    }
  });

  // ============================================================
  // URL Hash Support (deep linking to tabs)
  // ============================================================
  function activateTabFromHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const $tab = $mainTabs.filter('[data-tab="tab-' + hash + '"]');
      if ($tab.length) {
        $tab.trigger('click');
      }
    }
  }

  activateTabFromHash();
  $(window).on('hashchange', activateTabFromHash);

  // Update URL hash when tab changes
  $mainTabs.on('click', function () {
    const tabId = $(this).data('tab').replace('tab-', '');
    history.replaceState(null, null, '#' + tabId);
  });
});
