(function () {
  const planForm = $('#planForm');
  const planInfoForm = $('#planInfoForm');

  if (planForm) {
    planForm.validate({
      rules: {
        name: {
          required: true,
        },
        course: {
          required: true,
        },
      },
      messages: {
        name: {
          required: 'اسم الخطة التدريبية مطلوب',
        },
        course: {
          required: 'يجب اختيار الدورة التدريبية',
        },
      },
      submitHandler: function (form) {},
    });
  }

  if (planInfoForm) {
    planInfoForm.validate({
      rules: {
        type: {
          required: true,
        },
        duration: {
          required: true,
        },
        plan_time: {
          required: true,
        },
        method: {
          required: true,
        },
        timing: {
          required: true,
        },
        duration_number: {
          required: true,
        },
      },
      messages: {
        type: {
          required: 'نوع الخطة الدراسية مطلوب',
        },
        duration: {
          required: 'مدة الدراسة مطلوبة',
        },
        plan_time: {
          required: 'وقت الدراسة مطلوب',
        },
        method: {
          required: 'وسيلة التذكير مطلوبة',
        },
        duration_number: {
          required: 'المدة الرقمية مطلوبة',
        },
        timing: {
          required: 'توقيت التذكير مطلوب',
        },
      },
      submitHandler: function (form) {},
      errorPlacement: (error, el) => {
        if (el?.parent()?.hasClass('btn-group')) {
          error?.insertAfter(el?.parent());
        } else {
          error?.insertAfter(el);
        }
      },
    });
  }

  $('.plan__next__btn').on('click', function (e) {
    e.preventDefault();
    const parent_form = $(this).closest('form');
    const next_step_num = $(this).closest('.study__plan__step')?.attr('data-step');
    if (!parent_form?.valid()) return;
    if (next_step_num) {
      const current_step_el = $(this).closest('.study__plan__step');
      const target_step_el = $(`[data-step=${$(this)?.attr('data-next')}]`);
      if (current_step_el && target_step_el) {
        current_step_el?.slideUp(300);
        target_step_el?.slideDown(400);
      }
    }
  });

  $('.plan__prev__btn').on('click', function (e) {
    e.preventDefault();
    const current_step_el = $(this).closest('.study__plan__step');
    const target_step_el = $(`[data-step=${$(this)?.attr('data-prev')}]`);
    if (current_step_el && target_step_el) {
      current_step_el?.slideUp(300);
      target_step_el?.slideDown(400);
    }
  });

  $('.plan__submit__btn').on('click', function (e) {
    e.preventDefault();
    const parent_form = $(this).closest('form');
    console.log(parent_form);
    if (!parent_form?.valid()) return;
  });
})();
