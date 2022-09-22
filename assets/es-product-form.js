if (!customElements.get('product-form')) {
  customElements.define('product-form', class ProductForm extends HTMLElement {
    constructor() {
      super();

      this.form = this.querySelector('form');
      this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
      this.cartNotification = document.querySelector('cart-notification');
    }

    onSubmitHandler(evt) {
      evt.preventDefault();
      $("#cart-drawer").addClass("active");
      $(".backfrop-background").addClass("active");
      $("#cart-drawer .Drawer__box:nth-child(1)").addClass("loader");
      $("#cart-drawer .You-Might-Also-Like").addClass("loader");
      if($(".Drawer__body.cart_section").hasClass("cart_empty"))
      {
       $(".Drawer__body.cart_section.cart_empty").addClass("loader");
      }
      const submitButton = this.querySelector('[type="submit"]');
      if (submitButton.classList.contains('loading')) return; 

      this.handleErrorMessage();
      this.cartNotification.setActiveElement(document.activeElement);

      submitButton.setAttribute('aria-disabled', true);
      submitButton.classList.add('loading');
      this.querySelector('.loading-overlay__spinner').classList.remove('hidden');

      const config = fetchConfig('javascript');
      config.headers['X-Requested-With'] = 'XMLHttpRequest';
      config.body = JSON.stringify({
        ...JSON.parse(serializeForm(this.form)),
        sections: this.cartNotification.getSectionsToRender().map((section) => section.id),
        sections_url: window.location.pathname
      });
      fetch(`${routes.cart_add_url}`, config)
        .then((response) => response.json())
        .then((response) => {
          if (response.status) {
            this.handleErrorMessage(response.description);
            return;
          }
         console.log(response);
         setTimeout(()=>{
        $.ajax({
          type: 'GET',
          url: '/cart.js',
          dataType: 'json',
          success: function(cart){
            console.log(cart.item_count);
            $(".cart_total_headr").text(cart.item_count);   
          },
          error: function(error) {
            alert("!Error "+error.responseJSON.description+" Try Again...");
          }
        });
      },100);
        var item_id = response.id
//        $("#cart-drawer").addClass("active");
//          $("#cart-drawer").removeClass("loader");
        //this.cartNotification.renderContents(response);
        $("#cart-drawer .Drawer__box:nth-child(1)").removeClass("loader");
        $("#cart-drawer .You-Might-Also-Like").removeClass("loader");
        $(".Drawer__body.cart_section.cart_empty").removeClass("loader");
        $(".Drawer__body_in").html(response.sections['es-cart-notification-product']);
        $(".Drawer__footer").html(response.sections['es-cart-notification-button']);
        $(".Drawer__header").html(response.sections['es-cart-notification-header']);
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          submitButton.classList.remove('loading');
          submitButton.removeAttribute('aria-disabled');
          this.querySelector('.loading-overlay__spinner').classList.add('hidden');
        });
    }

    handleErrorMessage(errorMessage = false) {
      this.errorMessageWrapper = this.errorMessageWrapper || this.querySelector('.product-form__error-message-wrapper');
      this.errorMessage = this.errorMessage || this.errorMessageWrapper.querySelector('.product-form__error-message');

      this.errorMessageWrapper.toggleAttribute('hidden', !errorMessage);

      if (errorMessage) {
        this.errorMessage.textContent = errorMessage;
      }
    }
  });
}
