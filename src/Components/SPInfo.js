import Image from "../assets/images/mehrab-zahedbeigi-oBnBxUIb04g-unsplash.jpg";


function Info() {
  return (
    <main>
        <img src={Image} className="main--photo"></img>
        <h2 className="main--name">Avery Smith</h2>
        <p className="main--role">Frontend Developer</p>
        <button className="main--email">Email</button>
    </main>
  )
}

export default Info;
