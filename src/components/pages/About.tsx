import "./About.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// сторінка про нас
export const About = () => {
  return( 
  <>
  <div className="aboutPage">
 
   <div className="aboutInfo"> <span>  Широкий асортимент товарів вітчизняного та іноземного виробництва <p/> Побутова техніка, сантехніка, матеріали для покриття підлоги, декор для дому, освітлення та водопровід<p/>
   Понад 10 років на ринку<p/>
  </span> 

<img src="images/Колаж.jpg" className="aboutPhoto collagePhoto" />
   </div>  
  

  <div className="aboutInfo" >
  <img  src="images/гарантія2.jpeg" className="aboutPhoto guaranteePhoto" />
  <span id="specialInfo"> Гарантійне та післягарантійне обслуговування<p/>
  Оперативна доставка товару, самовивіз   <p/>
  Кваліфіковані консультації, підбір товару, зворотній звязок
    <p/>
   Дбайливе ставлення до клієнтів, відповідальність у роботі 
     </span>
   
   
    </div>



    <div className="aboutInfo">
    <span> Графік роботи: <br/>
       Понеділок - П'ятниця з 8:30 до 18:00<br/> Субота 8:30 - 17:00, Неділя - вихідний <p/>
       Місцезнаходження:<br/> вул. Грушевського, 30-Б, місто Заставна,<br/> Чернівецький район, Чернівецька область<br/>
   </span>

<div className="aboutPhoto" id="specialBlock"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6818.784737972617!2d25.83912398349963!3d48.51975651633813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473157c3989f62bd%3A0x9513a670b8d2e031!2z0KPQutGA0LDRl9C90LA!5e0!3m2!1suk!2sua!4v1711966157768!5m2!1suk!2sua" width="100%" height="100%"   loading="lazy"></iframe></div>
    {/* <img src="images/Shop1.jpg" className="aboutPhoto" /> */}
    </div>


<div className="Contacts">
  <span>Номер телефону: <span className="phoneNumber2">+380 50 555 1824</span></span>
  <br />
  <span>Електронна пошта:
  <a className="emailAdress" href="https://mail.google.com/mail/?view=cm&fs=1&to=tcukrainazastavna@gmail.com" target="_blank">  tcukrainazastavna@gmail.com</a>
     </span>
  

  <br />
  <div className="socialData">
  <span className="socialWords">Соціальні мережі: </span>
  <a href="https://www.instagram.com/ukraine_shop_center/" target="_blank" rel="noopener noreferrer" className="instagramLink">
<span className="instagramIcon"><FontAwesomeIcon icon={faInstagram} /></span>
</a>
{/* End socialData */}
</div>

  {/* <img src="url_до_зображення_логотипу_Instagram" alt="Instagram"/> */}
  
{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg> */}
{/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}

{/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}

</div>



  </div>
  </>)
};