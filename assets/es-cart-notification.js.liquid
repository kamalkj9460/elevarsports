
class CartNotification extends HTMLElement {
  constructor() {
    super();

    this.notification = document.getElementById('cart-notification');
    this.header = document.querySelector('sticky-header');
    this.onBodyClick = this.handleBodyClick.bind(this);
    
    this.notification.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
    this.querySelectorAll('button[type="button"]').forEach((closeButton) =>
      closeButton.addEventListener('click', this.close.bind(this))
    );
  }

  open() {
    this.notification.classList.add('animate', 'active');

    this.notification.addEventListener('transitionend', () => {
      this.notification.focus();
      trapFocus(this.notification);
    }, { once: true });

    document.body.addEventListener('click', this.onBodyClick);
  }

  close() {
    this.notification.classList.remove('active');

    document.body.removeEventListener('click', this.onBodyClick);

    removeTrapFocus(this.activeElement);
  }

  renderContents(parsedState) {
      this.productId = parsedState.id;
      this.getSectionsToRender().forEach((section => {
        document.getElementById(section.id).innerHTML =
          this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
          console.log(parsedState.sections[section.id]);
      }));

      if (this.header) this.header.reveal();
      this.open();
  
  }

  getSectionsToRender() {
    return [
      {
        id: 'es-cart-notification-product',
        selector: `#cart-notification-product-${this.productId}`,
      },
      {
        id: 'es-cart-notification-button'
      },
      {
        id: 'cart-icon-bubble'
      },
      {
        id: 'es-cart-notification-header'
      }
    ];
  }

  getSectionInnerHTML(html, selector = '.shopify-section') {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector).innerHTML;
  }

  handleBodyClick(evt) {
    const target = evt.target;
    if (target !== this.notification && !target.closest('cart-notification')) {
      const disclosure = target.closest('details-disclosure');
      this.activeElement = disclosure ? disclosure.querySelector('summary') : null;
      this.close();
    }
  }

  setActiveElement(element) {
    this.activeElement = element;
  }
}

customElements.define('cart-notification', CartNotification);



//update cart product
function update_product(){
  fetch(`?section_id=es-cart-notification-product`)
  .then(response => response.text())
  .then(text => {
    const pickupAvailabilityHTML = new DOMParser()
    .parseFromString(text, 'text/html')
    .querySelector('.shopify-section');

    $(".Drawer__body_in").html(text);
  })
  .catch(e => {
    console.error(e);
  });
}

//update cart footer
function update_footer(){
  fetch(`?section_id=es-cart-notification-button`)
  .then(response => response.text())
  .then(text => {
    const pickupAvailabilityHTML = new DOMParser()
    .parseFromString(text, 'text/html')
    .querySelector('.shopify-section');

    $(".Drawer__footer").html(text);
  })
  .catch(e => {
    console.error(e);
  });
  setTimeout(function(){
  var swiper = new Swiper(".mySwiper_bottom", {
    slidesPerView: 4,
    spaceBetween: 10,
    allowTouchMove:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
//      $("#cart-drawer").removeClass("loader");
  },1000);
  
}

//update cart header
function update_header(){
  fetch(`?section_id=es-cart-notification-header`)
  .then(response => response.text())
  .then(text => {
    const pickupAvailabilityHTML = new DOMParser()
    .parseFromString(text, 'text/html')
    .querySelector('.shopify-section');

    $(".Drawer__header").html(text);
  })
  .catch(e => {
    console.error(e);
  });
}

//change product quantity
function change_qty(qty, id){
  var qty = parseInt(qty);
  $.ajax({
    url: '/cart/change.js',
    dataType: 'json',
    async:false,
    cache: false,
    type: 'post',
    data: { quantity: qty, id: id },
    success: function (data) {
      update_header();
      update_product(); 
      update_footer();
      update_header_qty();
      setTimeout(function(){
        $("#es-cart-notification-product-"+id).removeClass("loader");
      },500);
    },
    error: function(error) {
      alert("!Error "+error.responseJSON.description+" Try Again...");
    }

  });
   
}

//cart_total_headr
function update_header_qty(){
  $.ajax({
    type: 'GET',
    url: '/cart.js',
    dataType: 'json',
    success: function(cart){
      $(".cart_total_headr").text(cart.item_count);   
    },
    error: function(error) {
      alert("!Error "+error.responseJSON.description+" Try Again...");
    }
  });

  
}
//plus quantity
$(document).on("click", ".add", function(e){
  
  var th = $(this).closest('.quantity').find('.count');    	
  th.val(+th.val() + 1);
  var id= $(this).data("id");
  var qty = parseInt($(".qty_"+id).val());
  $("#es-cart-notification-product-"+id).addClass("loader");
  change_qty(qty, id)
});

//minus quantity
$(document).on("click", ".sub", function(e){
  var th = $(this).closest('.quantity').find('.count');    	
  if (th.val() > 1) th.val(+th.val() - 1);  
  var id= $(this).data("id");
  var qty = parseInt($(".qty_"+id).val());
   $("#es-cart-notification-product-"+id).addClass("loader");
   change_qty(qty, id)
});

//remove Product
$(document).on("click", ".crt-trash", function(e){ 
  var id= $(this).data("id");
  var qty = 0;
  $("#es-cart-notification-product-"+id).addClass("loader");
   change_qty(qty, id)
});

//open cart 
$(document).on("click", "#cart-icon-bubble", function(e){
  e.preventDefault(); 
  $("#cart-drawer").toggleClass("active");
  $(".backfrop-background").toggleClass("active");
//   $("#cart-drawer").addClass("loader");
  update_header();
  update_product(); 
  update_footer();
  update_header_qty();
    
  
});     

//close cart 
$(document).on("click", "#cart-back-arrow", function(e){
  e.preventDefault();
  $("#cart-drawer").toggleClass("active");
  $(".backfrop-background").toggleClass("active");
});

//cart note update
$(document).on("click", ".cart_node_btn", function(e){
  e.preventDefault();
  $(".gifting-line").addClass("loader");
 var note = $("#Cart-note").val();
  $.ajax({
    type: "POST",
    async:false,
    url: '/cart/update.js',
    data: {
      note: note
    },
    dataType: "json",
    success:function(result)
    {   
      $(".cart_section").removeClass("hide");
      $(".cart__note").addClass("hide");
      update_header();
      update_product(); 
      update_footer();
      setTimeout(function(){
        $(".gifting-line").removeClass("loader");
      },2000);
    },
    error: function(error) {
      alert("!Error "+error.responseJSON.description+" Try Again...");
    }
  });
  
});

// you_may_submit_pro 
$(document).on("click", ".you_may_submit_pro", function(e){
  e.preventDefault();
   var var_id = $(this).data("id")
    $.ajax({
    type: "POST",
    async:false,
    url: '/cart/add.js',
    data: {
      quantity: 1,
      id: var_id,
    },
    dataType: "json",
    success:function(result)
    {
      update_header();
      update_product(); 
      update_footer();
      update_header_qty();
    },
    error: function(error) {
      alert("!Error "+error.responseJSON.description+" Try Again...");
    }

  });
  
});

// icon-gift
$(document).on("click", ".icon-gift", function(e){
  $(".cart_section").addClass("hide");
  $(".cart__note").removeClass("hide");
  
});

// cart__note_cancel
$(document).on("click", ".cart__note_cancel", function(e){
  $(".cart_section").removeClass("hide");
  $(".cart__note").addClass("hide");
  
});

// chnage you may also like variant
$(document).on("click", ".upsell_option_label", function(e){
  var data_val =  $(this).data("val");
  $("."+data_val).find(".upsell_option_label").removeClass("is-active");
  $(this).addClass("is-active");
  var check_select= '';
  var lenth_upsell_pro = $("#cart-drawer").find(".outer_option").length;
  setTimeout(function(){
  for(var i=0; i<lenth_upsell_pro; i++)
  { 
    var val_select = $("#cart-drawer").find(".outer_option.option-"+i).find("input:checked").val();
    if(val_select == undefined)
    {
     var val_select = $("#cart-drawer").find(".outer_option.option-"+i).find("input").first().val();
    }
    if(val_select != undefined)
    {
      if(i == 0)
      { 
       check_select = val_select;
      }
      else
      {
       check_select += " / "+val_select;
      }
    }
      
  }
  $("#cart-drawer").find(".you_may_submit_pro").attr("disabled","disabled");
  $("#cart-drawer").find("select.variant_cart_notification").find("option").each(function(){
   var check_option_text = $(this).text();
    if(check_option_text == check_select)
    {
      $("#cart-drawer").find(".you_may_submit_pro").removeAttr("disabled");
      var val_id = $(this).attr("value");
      var data_img = $(this).data("img");
      var data_price = $(this).data("price");
      var data_co_price = $(this).data("co_price");
      $("#cart-drawer").find(".you_may_submit_pro").attr("data-id",val_id);
      $("#cart-drawer").find(".upsell_img_pro").attr("src",data_img);
      $("#cart-drawer").find(".upsell_prc_pro").text(data_price);
      if(data_co_price != '')
      {
      $("#cart-drawer").find(".upsell_com_prc_pro").removeClass("hide");
      $("#cart-drawer").find(".upsell_com_prc_pro").text(data_co_price);
      }
      else
      {
       $("#cart-drawer").find(".upsell_com_prc_pro").addClass("hide");
      }
    }

  });
  },300);
});
  
$(document).on("click", ".accordion", function(){
  $(this).toggleClass("active");
  var data_id = $(this).data("id");
  $("."+data_id).toggleClass("active");
});
// // swipper
  var swiper = new Swiper(".mySwiper_bottom", {
  slidesPerView: 4,
  spaceBetween: 30,
  allowTouchMove:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var modal = document.getElementById("cart-drawer");

window.onclick = function(event) {
  if (event.target == modal) {
   $("#cart-drawer").removeClass("active");
   $(".backfrop-background").toggleClass("active");
  }
}


