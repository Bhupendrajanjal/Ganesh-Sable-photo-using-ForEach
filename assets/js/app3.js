var cl = console.log;




// ///Selecting Html element on the basic of relationship  is known as traversing 







var imgcontainer = document.getElementById('imagescontainer')

const images=[
    {imgUrl:'https://scontent.fpnq7-1.fna.fbcdn.net/v/t39.30808-6/279139238_3245550402358824_4697667270729809039_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AF62JHvz2Y8AX8mo0yK&_nc_ht=scontent.fpnq7-1.fna&oh=00_AfDVtNjB6eKCyClGMpw-gglvfulB5MUlQZvw8QZk16ENIQ&oe=64C056AE', catg:'Ganesh Sable Patil.2 '},
    {imgUrl:'https://scontent.fpnq7-3.fna.fbcdn.net/v/t39.30808-6/273380192_3190093364571195_9108890185618593518_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=kGiNvkYjdTMAX8bKUAa&_nc_ht=scontent.fpnq7-3.fna&oh=00_AfDJMDBLA6HzhKe5VcYcRuruWYKGG9rr4387UD7-Tkn2EQ&oe=64BF83BC', catg:'Ganesh Sable Patil.3 '},
    
    {imgUrl:'https://scontent.fpnq7-1.fna.fbcdn.net/v/t1.6435-9/33085407_2096054407308435_2095646016962297856_n.jpg?stp=dst-jpg_p843x403&_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=Tb9UkjlMCrIAX_KmwIa&_nc_ht=scontent.fpnq7-1.fna&oh=00_AfBNGk__I2xxNMoZYVdh_qEGtaykMpxOMYjsDuUgERajMg&oe=64E221B9', catg:'Ganesh Sable Patil.4 '},
    {imgUrl:'https://scontent.fpnq7-2.fna.fbcdn.net/v/t1.6435-9/38600646_2161207594126449_8118402240084967424_n.jpg?stp=dst-jpg_p843x403&_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=c8hXnE5mOgoAX-X-o2v&_nc_ht=scontent.fpnq7-2.fna&oh=00_AfAslXjcvVR5h3xtzEDobCZ4LwJHD9lFhPiTc5rwTD1aiw&oe=64E2217F', catg:'Ganesh Sable Patil.5 '},
    
    

    {imgUrl:'https://scontent.fpnq7-4.fna.fbcdn.net/v/t1.18169-9/18485636_1917100501870494_1331700499918087031_n.jpg?stp=dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=C3xDkSHb24kAX-z9Reg&_nc_ht=scontent.fpnq7-4.fna&oh=00_AfBWYEsuNcs-_0v3MOj_FiKgNGOvzRJKgui9vyFmUdZaig&oe=64E22AA4', catg:'Ganesh Sable Patil.6 '},
    
    


    {imgUrl:'https://scontent.fpnq7-2.fna.fbcdn.net/v/t1.18169-9/16174505_1859649954282216_1537566058843657290_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=t-jSFTSLGYEAX9Qbyeo&_nc_ht=scontent.fpnq7-2.fna&oh=00_AfA3Z15oJjgcuuGXPeGbwYrlAqK48okIm1C_XOaCDnsc_Q&oe=64E22395', catg:'Ganesh Sable Patil.7 '},
    
    

    
    


]

    



let result='';

images.forEach(ele=>{
    result+=`
    <div class="col-md-6 mb-4">
    <div class="card">
       <div class="card-header display-4">
        ${ele.catg}
       </div>
       <div class="card-body">
        <img class="img-fluid " src="${ele.imgUrl}" alt="">
       </div>
       <div class="card-footer">
       <button class="btn btn-danger">
        Like
       </button>
       </div>
    </div>
</div>



    `
})
imgcontainer.innerHTML=result;