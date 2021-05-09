function openAdmin(evt, adminName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent-admin");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks-admin");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(adminName).style.display = "block";
    evt.currentTarget.className += " active";
  } 
  document.getElementById("defaultOpen").click();
      

  function openPengguna(evt, Name) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent-pengguna");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks-pengguna");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(Name).style.display = "block";
    evt.currentTarget.className += " active";
  } 
  document.getElementById("defaultOpen-pengguna").click();
  
  document.querySelector('.tambah-kursus').addEventListener('click',(e) =>{
    const first = e.target.parentElement.parentElement.parentElement;
    first.classList.add('d-none')
    first.nextElementSibling.classList.remove('d-none');
  })

  document.querySelector('.tambah-pelatihan').addEventListener('click',(e) =>{
    const first = e.target.parentElement.parentElement.parentElement;
    first.classList.add('d-none')
    first.nextElementSibling.classList.remove('d-none');
  })
  
  document.querySelector('.btn-lanjut').addEventListener('click',(e) => {
    e.preventDefault();
    const first = e.target.parentElement.parentElement.parentElement;
    first.classList.add('d-none')
    first.nextElementSibling.classList.remove('d-none')
  });
  
  document.querySelector('.tambah-silabus').addEventListener('click',(e) =>{
    e.preventDefault();
    const input = document.createElement("input");
    input.classList.add('form-control');
    input.classList.add('mb-2');
    const silabus = document.querySelector('.silabus');
    const wrap = document.querySelector('.btn-tambah-wrap');
    silabus.insertBefore(input,wrap);
  });

  


document.querySelector('.tambah-materi').addEventListener('click',(e) =>{
    e.preventDefault();
    const wrap = document.querySelector('.materi-wrap');
    let el = wrap.innerHTML;
    el+=`                <label for="harga" class="col-md-2 fw-bold">Materi1</label>
    <div class="col-md-8 d-flex gap-3 align-items-start">
      <div>
        <input type="text" class="form-control mb-2" name="harga" id="harga">
        <input type="text" class="form-control mb-2" name="harga" id="harga">
      </div>  
      <button class="btn btn-outline-dark d-flex align-items-center gap-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Video
        <svg width="2" height="25" viewBox="0 0 2 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line opacity="0.15" x1="0.75" y1="3.27835e-08" x2="0.749999" y2="25" stroke="black" stroke-width="1.5"/>
          </svg>
          
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.25 0.75L4 4.25L0.75 0.75" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">pilihan</a></li>
        <li><a class="dropdown-item" href="#">pilihan</a></li>
        <li><a class="dropdown-item" href="#">pilihan</a></li>
      </ul>
    </div>`;
    wrap.innerHTML = el;
});

document.querySelector('.tambah-kuis').addEventListener('click',(e) => {
    e.preventDefault();
    const wrap = document.querySelector('.materi-wrap');
    let el = wrap.innerHTML;
    el+=`<label for="harga" class="col-md-2 fw-bold">Kuis</label>
    <div class="col-md-8 d-flex gap-3 align-items-start">
      <div>
        <input type="text" class="form-control mb-2" name="harga" id="harga">
      </div>  
    </div>`;
    wrap.innerHTML = el;
});

document.querySelector('.table-pengguna tbody tr').addEventListener('click',(e) => {
    const parent = e.target.parentElement.parentElement.parentElement.parentElement;
    parent.classList.add('d-none');
    parent.nextElementSibling.classList.remove('d-none');
})

