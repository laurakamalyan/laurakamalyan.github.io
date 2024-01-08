// Upload picture
$(document).ready(function(){
    $("#wizard-picture").change(function(){
        readURL(this);
    });
});
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}

// Skills
$('#text').on('click', function(){
    document.getElementById('addText').style.display = "block";
    document.getElementById('text').style.display = "none";
});

// Save CV
$('#btn_Save').on('click', function(){
    var name = document.getElementById('name').value;    
    var profession = document.getElementById('profession').value;
    var telnum = document.getElementById('telnum').value;
    var addr = document.getElementById('addr').value;
    var website = document.getElementById('website').value;
    var email = document.getElementById('email').value;
    var facebook = document.getElementById('facebook').value;
    var twitter = document.getElementById('twitter').value;
    var linkedln = document.getElementById('linkedln').value;
    
    var content = document.getElementById('content_left');
    content.innerHTML = "";
    
    var nameDiv = document.createElement('div');
    name = name.fontsize(5);
    nameDiv.innerHTML = name;
    nameDiv.style.marginBottom = '-5px';
    nameDiv.style.textAlign = 'center';
    content.appendChild(nameDiv);
    
    var professionDiv = document.createElement('div');    
    profession = profession.fontsize(2);    
    professionDiv.innerHTML = profession;
    professionDiv.style.textAlign = 'center';
    content.appendChild(professionDiv);   
    
    // Contact
    var DivContact = document.createElement('div');
    DivContact.classList.add('contact');
    
    var cont = document.createElement('p');
    cont.classList.add("_title");
    cont.innerHTML = "Contact";
    DivContact.appendChild(cont);
    
    // Telephone number
    var elem = document.createElement("img");
    elem.setAttribute("src", "img/telnum.png");
    DivContact.appendChild(elem);
    
    DivContact.innerHTML += " ";
    DivContact.innerHTML += telnum;
    DivContact.innerHTML += "<br>";
    
    // Address
    elem.setAttribute("src", "img/address.png");
    DivContact.appendChild(elem);
    
    DivContact.innerHTML += " ";
    DivContact.innerHTML += addr;
    DivContact.innerHTML += "<br>";
    
    // WebSite
    elem.setAttribute("src", "img/www.png");
    DivContact.appendChild(elem);
    
    DivContact.innerHTML += " ";
    DivContact.innerHTML += website;
    DivContact.innerHTML += "<br>";
    
    // Email
    elem.setAttribute("src", "img/email.png");
    DivContact.appendChild(elem);
    
    DivContact.innerHTML += " ";
    DivContact.innerHTML += email;
    DivContact.innerHTML += "<br>";

    content.appendChild(DivContact);
    
    // Skills
    var DivSkills = document.createElement('div');
    DivSkills.classList.add('skills');
    
    var skill = document.createElement('p');
    skill.classList.add("_title");
    skill.innerHTML = "Skills";
    DivSkills.appendChild(skill);
    
    var p = document.createElement("p");
    p.innerHTML = document.getElementById('addText').value;
    p.style.fontSize = "12px";
    DivSkills.appendChild(p);

    
    content.appendChild(DivSkills);
    
    // Follow
    var DivFollow = document.createElement('div');
    DivFollow.classList.add('follow');
    
    var foll = document.createElement('p');
    foll.classList.add("_title");
    foll.innerHTML = "Follow me";
    DivFollow.appendChild(foll);
    
    // FaceBook
    var label = document.createElement("div");
    label.innerHTML = "Facebook";
    label.classList.add('lab');
    DivFollow.appendChild(label);
    
    DivFollow.innerHTML += facebook;
    
    // Twitter
    label = document.createElement("div");
    label.innerHTML = "Twitter";
    label.classList.add('lab');
    DivFollow.appendChild(label);
    
    DivFollow.innerHTML += facebook;
    
    // Linkedln
    label = document.createElement("div");
    label.innerHTML = "Linkedln";
    label.classList.add('lab');
    DivFollow.appendChild(label);
    
    DivFollow.innerHTML += linkedln;
    
    content.appendChild(DivFollow);
    
    // Hide
    document.getElementById('hideSectionLeft').style.display = "none";
    
    // Right Section
    var profile = document.getElementById('profile').value;
    document.getElementById('change_profile').innerHTML = profile;
    
    document.getElementById('btn_addwork').style.display = 'none';
    document.getElementById('btn_addeduc').style.display = 'none';
    
    var compName = document.getElementById('compName').value;
    document.getElementById('change_compName').innerHTML = compName;
    
    var ref = document.getElementById('ref').value;
    document.getElementById('change_ref').innerHTML = ref;
    
    var ph2 = document.getElementById('phone2').value;
    document.getElementById('change_phone2').innerHTML = ph2;
    
    var em2 = document.getElementById('email2').value;
    document.getElementById('change_email2').innerHTML = em2;
    
    document.getElementById('btn_Save').style.display = 'none';
    document.getElementById('btn_Download').style.display = 'block';
});

// Add
function Add_(hideSection, profession, companyName, startDate, endDate, details){
    document.getElementById(hideSection).style.display = 'block';
    var profession = document.getElementById(profession).value = "";
    var companyName = document.getElementById(companyName).value = "";
    var startDate = document.getElementById(startDate).value = "";
    var endDate = document.getElementById(endDate).value = "";
    var details = document.getElementById(details).value = "";
    
    changeHeight();
}

// Save
function Save(hideSection, profession, companyName, startDate, endDate, details, content){
        
    var profession = document.getElementById(profession).value;
    var companyName = document.getElementById(companyName).value;
    var startDate = document.getElementById(startDate).value;
    var endDate = document.getElementById(endDate).value;
    var details = document.getElementById(details).value;
    
    profession = profession.fontsize(4);
    var strLeft = '<br>' + '<b>' + profession + '</b>' + '<br>' + companyName;
    if (startDate == "" || endDate == ""){
        //alert('Input date');
        //return;
    }
    var strRight = '<br>' + startDate + ' / ' + endDate;
    
    var newRow = document.createElement('div');
    newRow.classList.add("row");
    newRow.style.color = '#626365';
    content.appendChild(newRow);
    
    var newDivLeft = document.createElement('div');
    newDivLeft.classList.add("col-lg-6", "col-md-6", "col-sm-6", "col-xs-6");
    newDivLeft.innerHTML = strLeft; 
    newDivLeft.style.fontSize = '12px';
    newRow.appendChild(newDivLeft);
    
    var newDivRight = document.createElement('div');
    newDivRight.classList.add("col-lg-6", "col-md-6", "col-sm-6", "col-xs-6");
    newDivRight.style.textAlign = 'center';
    newDivRight.innerHTML = strRight; 
    newDivRight.style.fontSize = '12px';
    newRow.appendChild(newDivRight);
    
    var newDivBottom = document.createElement('div');
    newDivBottom.classList.add("col-lg-12", "col-md-12", "col-sm-12", "col-xs-12");
    newDivBottom.innerHTML = '<br>' + details;
    newDivBottom.style.fontSize = '12px';
    newRow.appendChild(newDivBottom);   
    
    document.getElementById(hideSection).style.display = 'none';
    
    changeHeight();
}

// Cancel save
function Cancel(val){
    document.getElementById(val).style.display = 'none';
    
    changeHeight();
}

// Change height 
function changeHeight(){
    var minHeightDiv1 = 930;
    var heightDiv2 = $('#cv_right').height();
    
    
        $("#cv_left").height(function(){
            if (heightDiv2 > 905){
                return heightDiv2;
            }
            else{                
                return minHeightDiv1 + 'px';
            }
        });    
}