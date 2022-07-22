function toggle(id) {
    b = document.getElementById('accordion-header'+id);
    a = document.getElementById('accordion-body'+id);
      if (a.style.display=='block') {
        a.style.display='none';
        b.innerHTML='Show Discussion';
      }
      else {
        a.style.display='block';
        b.innerHTML='Hide Discussion';
    }
  };



import navbar from "../common/navbar.js"

document.getElementById("navbar").innerHTML = navbar();


import footer from "../common/footer.js"

document.getElementById("footer").innerHTML = footer();