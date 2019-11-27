import React from 'react';
import './about.css';

const About =()=>{
return(
    <div className="top2">


         <div id="demo" className="carousel slide" data-ride="carousel">
<ul className="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>


<div className="carousel-inner">
  <div className="carousel-item active">
  <img src = {process.env.PUBLIC_URL + "/img/about4.jpg"} alt="pic1" width="100%" /> 
  </div>
  <div className="carousel-item">
  <img src = {process.env.PUBLIC_URL + "/img/about5.jpg"} alt="pic1" width="100%" /> 
  </div>
  <div className="carousel-item">
  <img src = {process.env.PUBLIC_URL + "/img/about3.jpg"} alt="pic1" width="100%" /> 
  </div>
</div>


<a className="carousel-control-prev" href="#demo" data-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" href="#demo" data-slide="next">
  <span className="carousel-control-next-icon"></span>
</a>
</div>
<br/>

<div class="row">
  <div class="col-md-6">
  <img src = {process.env.PUBLIC_URL + "/img/about1.jpg"} alt="pic1" width="100%" height="510px" /> 
  </div>

  <div class="col-md-6">
    <h1 class="about-heading1">Our vision, values and strategy </h1>
  <p class="about-para1">
  बाबा रैनाथ ब्रह्म सेवा संस्था एक समाजिक संस्था है जो मूल रूप से समाज मे विभिन्न प्रकार से 
  उपेक्षित लोगों के उत्थान हेतु कार्यरत है।संस्था का मूल उदेश्य समाज में व्याप्त विषमता को समाप्त
   कर समानता व एकता स्थापित करना है।संस्था विशेष रूप से उनलोगो को समाज मे एक स्थान दिलाने 
   का प्रयत्न करती है जो समाज मे किसी वजह से वंचित और उपेक्षित हैं।संस्था के एक मुहिम" निःशुल्क
    शिक्षा "के अंतर्गत भारत की शैक्षणिक व्यवस्था को एक मज़बूत आधार प्रदान करना है जिसके 
    अन्तर्गत समाज के निचले पायदान पर बैठे बच्चों को शिक्षा की मुख्य धारा से जोड़ना है।एक ऐसी 
    सोच जिससे पुरे भारत का नवनिर्माण किया जा सकता है।जब गुणवत्तायुक्त शिक्षा निःशुल्क मिलना 
    शुरू हो तो भारत विश्व गुरू बनने की तरफ़ अग्रसर हो।संस्था का विचार और व्यवहार मुख्य रूप से
     स्वामी विवेकानंद जी के जीवन से प्रेरित हैं।जहाँ एक तरफ़ शिक्षा को व्यापार बनाया जा रहा और
      गुणवत्ता का कोई पैमाना नहीं है वहीं दूसरी तरफ़ हमारा प्रयास ये है कि सम्पूर्ण भारत को शिक्षा 
      के व्यवसाय से मुक्त कराना है क्यूँकि शिक्षा ही एक मात्र ऐसा हथियार है जिससे समाज के सारी 
      समस्याओं का निराकरण किया जा सकता है तो आओ हम सब मिलकर एक गुणवत्तायुक्त निःशुल्क
       शिक्षा के व्यापक कार्यक्रम से ख़ुद को जोड़ें और सम्पूर्ण भारत को शिक्षा के व्यापार से मुक्त करायें.
       </p>
  </div>
</div>

<br/>

<div class="row">
  <div class="col-md-6">
  <h1 class="about-heading1">Our Original purpose</h1>
    <p class="about-para1">
  संस्था का मूल उद्देश्य गुणवत्तायुक्त निःशुल्क शिक्षा को बढ़ावा देना है लेकिन यह संस्था समाज के हर क्षेत्र में व्याप्त 
  कमियों को दूर करने की भावना से प्रेरित है अतः समय-२ पर विभिन्न प्रकार के कार्यक्रमो के माध्यम से लोगो को 
  जागरूक करने का काम किया जाता है।संस्था के विभिन्न कार्यक्रमों की सूची निम्नवत है-
१.महापुरुष जयंती पद रैली-हमारे समाज में आज भी बहुतायत संख्या में लोग ग़रीबी और भुखमरी झेल रहें हैं।ऐसे 
में उनकी प्राथमिक ज़रूरत रोटी कपड़ा और मकान है।इन संसाधनों को जुटाने के प्रयास में इंसान उन महापुरुषों को
 भूल जा रहा जिन्होंने इस देश और समाज को एक नयी दिशा प्रदान की।बाबा रैनाथ ब्रह्म सेवा संस्था द्वारा महापुरुषों 
 के जयंती पर पद रैली के माध्यम से लोगों के बीच उन्हें पुनः जागृत किया जाता है।
 </p>
  </div>

  <div class="col-md-6">
  <img src = {process.env.PUBLIC_URL + "/img/about2.jpg"} alt="pic1" width="100%" height="350px" /> 
  </div>
</div>


    </div>
)
}

export default About;