//global variables
let global_category='All';
let news_titles_data = ['Saaho','Stem-Cells','BJP','End Game','Nuclear Fusion','Congress','Dangal','Intel i9','Donald Trump','Maharshi'];
let news_category_data = ['Cinema', 'Science', 'Politics', 'Cinema', 'Science', 'Politics', 'Cinema', 'Science', 'Politics', 'Cinema'];
let news_matter_data = [
'Saaho is an upcoming Indian action thriller film written and directed by Sujeeth, produced by UV Creations and T-Series. The film stars Prabhas and Shraddha Kapoor, and is being shot simultaneously in Hindi, Tamil and Telugu. The film marks Prabhas\' debut in Hindi and Shraddha Kapoor\'s debut in South Indian cinema. ',
'Stem cells are cells that can differentiate into other types of cells, and can also divide in self-renewal to produce more of the same type of stem cells. In mammals, there are two broad types of stem cells: embryonic stem cells, which are isolated from the inner cell mass of blastocysts in early embryonic development, and adult stem cells, which are found in various tissues of fully developed mammals. ',
'The Bharatiya Janata Party is one of the two major political parties in India, along with the Indian National Congress. As of 2018, it is the country\'s largest political party in terms of representation in the national parliament and state assemblies, and it is the world\'s largest party in terms of primary membership. BJP is a right-wing party, and its policy has historically reflected Hindu nationalist positions.',
'Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to 2012\'s The Avengers, 2015\'s Avengers: Age of Ultron, and 2018\'s Avengers: Infinity War and the twenty-second film in the Marvel Cinematic Universe (MCU).',
'In nuclear chemistry, nuclear fusion is a reaction in which two or more atomic nuclei are combined to form one or more different atomic nuclei and subatomic particles (neutrons or protons). The difference in mass between the reactants and products is manifested as either the release or absorption of energy. This difference in mass arises due to the difference in atomic "binding energy" between the atomic nuclei before and after the reaction.',
'Congress is a secular party whose social democratic platform is generally considered to be on the centre-left of Indian politics. Congress\' social policy is based upon the Gandhian principle of Sarvodaya—the lifting up of all sections of society—which involves the improvement of the lives of economically underprivileged and socially marginalised people',
'Dangal is a 2016 Indian Hindi-language biographical sports drama film, directed by Nitesh Tiwari and produced by Aamir Khan, under his studio Aamir Khan Productions with UTV Motion Pictures and Walt Disney Pictures India. The film is loosely based on the Phogat family, telling the story of Mahavir Singh Phogat, a pehlwani amateur wrestler, who trains his daughters Geeta Phogat and Babita Kumari to become India\'s first world-class female wrestlers.',
'As Intel’s first-ever mainstream Core i9 chip, the Intel Core i9-9900K comes equipped with eight-cores, 16-threads and the ability to boost up to a maximum 5.0GHz clock speed. All told, this new octa-core processor not only closes the gap with AMD’s best processor, but runs past it.',
'Trump was born and raised in the New York City borough of Queens and received an economics degree from the Wharton School. He took charge of his family\'s real estate business in 1971, renamed it The Trump Organization, and expanded it from Queens and Brooklyn into Manhattan. The company built or renovated skyscrapers, hotels, casinos, and golf courses. Trump later started various side ventures, mostly by licensing his name. ',
'Maharshi is a 2019 Indian Telugu-language action drama film directed by Vamsi Paidipally and jointly produced by Dil Raju, C. Ashwini Dutt, and Prasad V. Potluri through their production companies Sri Venkateswara Creations, Vyjayanthi Movies, and PVP Cinema. The film stars Mahesh Babu, Allari Naresh, and Pooja Hegde. The music was composed by Devi Sri Prasad. Maharshi was released on 9 May 2019 to positive reviews.'
];
let news_dates_data = ['24 July, 2019','19 July, 2019','14 July, 2019','29 June, 2019','09 June, 2019','24 May, 2019',
'12 April, 2019','17 March, 2019','26 February, 2019','04 February, 2019'];
let news_morematter_data = ['','','','','','','','','',''];
let news_images = ['./images/saaho.jpg','./images/stemcells.jpg','./images/bjp.jpg','./images/endgame.jpg','./images/nuclear.jpg',
'./images/congress.jpg','./images/dangal.jpg','./images/intel.jpg','./images/trump.jpg','./images/maharshi.jpg']
let email_list;

if (localStorage.getItem("email_list") === null) {
    email_list=[];
  }
  else{
    email_list = JSON.parse(localStorage.getItem('email_list'));
  }

//-----------------------------------------------footer-----------------------------------------
function createFooter(){
let foo = document.createElement('div');
foo.setAttribute('class','footer');
let para = document.createElement("p");
let node = document.createTextNode("@ NewsFeed 2019");
para.appendChild(node);
para.style.display = 'inline';
para.style.fontFamily = 'arial';
para.style.fontSize = '0.6em';
para.style.color = 'white';
para.style.textAlign = 'center';
para.style.marginLeft = '47%';
foo.appendChild(para);
let main = document.getElementsByClassName('main')[0];
main.appendChild(foo);
}

//---------------------------------header-----------------------------------------------------
function createHeader(){
let para = document.createElement("p");
let h2 = document.createElement("h2");
let node1 = document.createTextNode("NEWSFEED");
let node2 = document.createTextNode("Yet another newsfeed");
para.appendChild(node2);
h2.appendChild(node1);
let div = document.createElement("div");
div.appendChild(h2);
div.appendChild(para);
let main = document.getElementsByClassName("main")[0];
main.appendChild(div)
div.style.backgroundColor= '#273852';
div.style.height= '90px';
h2.style.fontFamily='sans-serif';
h2.style.color='white';
h2.style.display='inline-block';
h2.style.marginLeft='20px';
h2.style.marginTop='30px';
h2.style.fontWeight='550';
para.style.position='relative';
para.style.opacity='0.9';
para.style.bottom='3px';
para.style.color='#e8e8e8';
para.style.fontFamily='sans-serif';
para.style.fontStyle='oblique 50deg';
para.style.display='inline-block';
para.style.marginLeft='20px';
para.style.fontSize='12px';
para.style.marginBottom='30px';
}

//----------------------------------------news heading----------------------------------------------------
function createNewsHeading(x){
    let newsHeading =  document.createElement("h2");
    let node1 = document.createTextNode(x);
    newsHeading.appendChild(node1);
    newsHeading.style.color='black';
    newsHeading.style.fontFamily='sans-serif';
    newsHeading.style.margin='0';
    newsHeading.style.padding='0';
    return newsHeading;

}

//--------------------------------------news date-----------------------------------------------------------
function createNewsDate(x, y)
{
    let node1 = document.createTextNode('Posted on ');
    let node2 = document.createTextNode(x);
    let node3 = document.createTextNode(' || Category: ');
    let node4 = document.createTextNode(y);
    let para1 = document.createElement("p");
    para1.appendChild(node1);
    para1.style.margin='0';
    para1.style.fontFamily='sans-serif';
    para1.style.marginBottom='1em';
    para1.style.fontSize='0.8em';
    para1.style.color='grey';
    para1.style.display='inline';
    let para2 = document.createElement("p");
    para2.appendChild(node2);
    para2.style.margin='0';
    para2.style.fontFamily='sans-serif';
    para2.style.marginBottom='1em';
    para2.style.fontSize='0.8em';
    para2.style.color='black';
    para2.style.display='inline';
    let para3 = document.createElement("p");
    para3.appendChild(node3);
    para3.style.margin='0';
    para3.style.fontFamily='sans-serif';
    para3.style.marginBottom='1em';
    para3.style.fontSize='0.8em';
    para3.style.color='grey';
    para3.style.display='inline';
    let para4 = document.createElement("p");
    para4.appendChild(node4);
    para4.style.margin='0';
    para4.style.fontFamily='sans-serif';
    para4.style.marginBottom='1em';
    para4.style.fontSize='0.8em';
    para4.style.color='black';
    para4.style.display='inline';
    return [para1, para2, para3, para4];
    
}


//----------------------------------------------------news matter---------------------------------------------

function createNewsMatter(x,)
{
    let node1 = document.createTextNode(x);
    let para1 = document.createElement("p");
    para1.appendChild(node1);
    para1.style.margin='0';
    para1.style.fontSize='0.8em';
    para1.style.marginTop='1em';
    para1.style.height='40%';
    para1.style.overflow='hidden';
    para1.style.fontFamily='sans-serif';
    return para1;
}

//----------------------------------------------------news extend------------------------------------------------

function createNewsExtend(position)
{
    let cname = `button- ${position}`;
    let node = document.createTextNode('Continue Reading');
    let button = document.createElement('button');
    button.appendChild(node);
    button.setAttribute("onclick",`readMore(${position})`);
    button.style.backgroundColor='#d25e52';
    button.style.fontFamily='sans-serif';
    button.style.color='white';
    button.style.border='0';
    button.style.margin='0';
    button.style.marginTop='8px';
    button.style.bottom='0';
    button.style.padding='8px 20px';
    button.style.cursor='pointer';
    return button;
}
//-----------------------------------------------news-image-------------------------------------------------------

function createNewsImage(path)
{
    let image = document.createElement('img');
    image.style.height='90%';
    image.style.width='20%';
    image.style.backgroundColor='#d0d0d0';
    image.style.float='left';
    image.style.margin='1%';
    image.src=path;
    return image;
}

//-----------------------------------------------content-----------------------------------------------------------

function createContent(title, date, category, matter, position)
{
    let content = document.createElement('div');
    content.style.backgroundColor= 'white';
    content.style.margin='1%';
    content.style.height='90%';
    content.style.width='76%';
    content.style.float='left';
    content.style.overflow='hidden';
    newsheading=createNewsHeading(title);
    content.appendChild(newsheading);
    newsDate=createNewsDate(date, category);
    content.appendChild(newsDate[0]);
    content.appendChild(newsDate[1]);
    content.appendChild(newsDate[2]);
    content.appendChild(newsDate[3]);
    newsMatter=createNewsMatter(matter);
    content.appendChild(newsMatter);
    newsExtend = createNewsExtend(position);
    content.appendChild(newsExtend);
    return content;
}

//------------------------------------------------news----------------------------------------------------

function createNews(title, date, category, matter,x)
{
    let news = document.createElement('div');
    news.style.display='block';
    news.style.height='180px';
    news.style.width='100%';
    news.style.backgroundColor='white';
    news.style.margin='15px';
    newsImage = createNewsImage(news_images[x]);
    news.appendChild(newsImage);
    content=createContent(title, date, category, matter, x);
    news.appendChild(content);
    return news;
}

//------------------------------------------select-category----------------------------------------------

function createSelectCategory()
{
    let info = document.createElement('h5');
    let matter = document.createTextNode('SELECT CATEGORY');
    info.appendChild(matter);
    info.style.fontFamily='sans-serif';
    info.style.fontWeight='800';
    info.style.color='#606060';
    info.style.marginBottom='0';
    return info;
}

//------------------------------------------dropdown--------------------------------------------------------

function createDropdown()
{
    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    let option3 = document.createElement('option');
    let option4 = document.createElement('option');
    option1.setAttribute("value","All");
    option2.setAttribute("value","Science");
    option3.setAttribute("value","Politics");
    option4.setAttribute("value","Cinema");
    option1.setAttribute("class","options");
    option2.setAttribute("class","options");
    option3.setAttribute("class","options");
    option4.setAttribute("class","options");
    let node1 = document.createTextNode('All');
    let node2 = document.createTextNode('Science');
    let node3 = document.createTextNode('Politics');
    let node4 = document.createTextNode('Cinema');
    option1.appendChild(node1);
    option2.appendChild(node2);
    option3.appendChild(node3);
    option4.appendChild(node4);
    let select = document.createElement('select');
    select.setAttribute("class","dropdown");
    select.setAttribute("name","category");
    select.setAttribute("onchange","categoryChange()");
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.value=global_category;
    return select;

}

//------------------------------------------category-change----------------------------------------

function categoryChange()
{
    
    global_category = document.getElementsByClassName("dropdown")[0].value;
    console.log(global_category);
    createData();
}


//------------------------------------------subscribe----------------------------------------------

function createSubscribe()
{
    let info = document.createElement('h5');
    let matter = document.createTextNode('SUBSCRIBE');
    info.appendChild(matter);
    info.style.fontFamily='sans-serif';
    info.style.fontWeight='800';
    info.style.color='#606060';
    info.style.marginBottom='0';
    return info;
}

//------------------------------------------form----------------------------------------------------

function createForm()
{
    let input = document.createElement('input');
    let button = document.createElement('button');
    let matter = document.createTextNode('Subscribe');
    button.setAttribute('onclick','validateEmail()');
    button.appendChild(matter);
    input.setAttribute('type','text');
    input.setAttribute('placeholder','Email Address');
    input.setAttribute('id','email');
    button.setAttribute('class','submit');
    let form = document.createElement('form');
    form.appendChild(input);
    form.appendChild(button);
    return form;
}

//----------------------------------------sub---------------------------------------------------------

function createSub()
{
    let sub = document.createElement('div');
    sub.setAttribute('class','subs');
    let one = createSelectCategory();
    let two = createDropdown();
    let three = createSubscribe();
    let four = createForm();
    sub.appendChild(one);
    sub.appendChild(two);
    sub.appendChild(three);
    sub.appendChild(four);
    console.log(`setting value is ${global_category}`);
    return sub;
}

//--------------------------------------data----------------------------------------------------------

function createData()
{
    let changed=0;
    let elem1 = document.getElementsByClassName('data')[0];
    let elem2 = document.getElementsByClassName('subs')[0];
    let elem3 = document.getElementsByClassName('footer')[0];
    if(elem1!=undefined)
    {
        console.log('entered');
        elem1.parentNode.removeChild(elem1);
        elem2.parentNode.removeChild(elem2);
        elem3.parentNode.removeChild(elem3);
        changed=1;
    }
    let data = document.createElement('div');
    data.setAttribute('class','data');
    if(true)
    {
        let total=news_category_data.length;
        for(let x=0;x<total;x++)
        {
            if(global_category!=news_category_data[x] && global_category!='All')
            {
                continue;
            }
            let content = createNews(news_titles_data[x], news_dates_data[x], news_category_data[x], news_matter_data[x],x);
            data.appendChild(content);
            if(x+1!=total)
            {
                let hr = document.createElement('hr');
                data.appendChild(hr);
            }
        }
    }

    if(changed==1)
    {
        createContainer();
        createFooter();
    }
    return data;

}

//---------------------------------overlaycontent-------------------------------------------

function overlayContent(position)
{
    console.log(`pressed: ${position}`);

    let elem1 = document.getElementsByClassName('overlay')[0];
    if(elem1!=undefined)
    {
        elem1.parentNode.removeChild(elem1);
    }

    let overlay = document.createElement('div');
    overlay.setAttribute('class','overlay');

    let close = document.createElement('a');
    close.setAttribute('class','closenbtn');
    close.setAttribute('onclick','closeNav()');
    let text = document.createTextNode('X');
    close.appendChild(text);

    let overlaycontent = document.createElement('div');
    overlaycontent.setAttribute('class','overlay-content');

    let heading = document.createElement('h1');
    heading.setAttribute('class','overlay-heading');
    text = document.createTextNode(news_titles_data[position]);
    console.log(news_titles_data[position]);
    heading.appendChild(text);
    let fulltext = document.createElement('p');
    fulltext.setAttribute('class','extended-content');
    text = document.createTextNode(news_matter_data[position].repeat(10));
    fulltext.appendChild(text);
    overlaycontent.appendChild(heading);
    overlaycontent.appendChild(fulltext);

    overlay.appendChild(close);
    overlay.appendChild(overlaycontent);


    return overlay;

}

//--------------------------------container-------------------------------------------------

function createContainer()
{
    let container = document.createElement('div');
    container.setAttribute('class','container');
    let data = createData();
    let sub = createSub();

    container.appendChild(data);
    container.appendChild(sub);
    let main = document.getElementsByClassName('main')[0];
    main.appendChild(container);


}


//---------------------------------------user-events-----------------------------------------
function readMore(position)
{
    let main = document.getElementsByClassName('main')[0];
    let overlay = overlayContent(position);
    main.appendChild(overlay);
    console.log('appended');
    document.getElementsByClassName("overlay")[0].style.width = "100%";

}

function closeNav() {
    console.log('close nav function called');
    document.getElementsByClassName("overlay")[0].style.width = "0%";
  }


  //---------------------------------------------validate email-----------------------------------------

function validateEmail() 
{
    mail=document.getElementById("email").value;
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value))
  {
      if(email_list.indexOf(mail) > -1)
      {
        alert('this email is already subscribed!');
      }
      else{
        email_list.push(mail);
        localStorage.setItem('email_list', JSON.stringify(email_list));
      }

    return (true);
  }
    alert("You have entered an invalid email address!");
    return (false);
}