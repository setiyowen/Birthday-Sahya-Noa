getBirthdayName()

function getBirthdayName() {

    let url = window.location.href;
    let regexName = new RegExp("name" + "(=([^&#]*))")
    let resultsName = regexName.exec(url);
    let regexSeg = new RegExp("seg" + "(=([^&#]*))")
    let resultsSeg = regexSeg.exec(url);

  if (resultsName == null) {
birthdayName = "Sahya Noa";
  } else {
    birthdayName = decodeURIComponent(resultsName[2]);
  }

    if (resultsSeg == null) {
      birthdaySeg = "general";

    } else {
    birthdaySeg = decodeURIComponent(resultsSeg[2]);

    }

if (birthdaySeg == "fundraisers"){
    document.getElementById('letter').innerHTML = "<div class='center-letter animate-reveal animate-first'> <h1>Happy Birthday!</h1><br><p style='margin: 0 10px; line-height:160%;'>Selamat ulang tahun sayang aku sahya noa " + birthdayName + "!<br><br> maaf ya kartu ucapannya, ini buat gantinya sementara sampai nanti siang heheh, jangan sedih ya, nanti aku bakal bawain.<br><br>  Selamat Ulang Tahun Sayang, walapun kemarin ulang tahunmu. doaku untuk pacarku yang bocil ini sehat dan bahagia sayang jangan sedih ya boleh sedih tapi buat seminggu ini jangan sedih sedih ya hehe 🎈🎈, aku sayang kamu. selamat ulang tahun sayang. traktir ya muawh ♥♥</p></div><div class='animate-reveal animate-second' style='margin-top: 15px;'> <a href='placeholderlink' style='margin-top: 15px; font-family: Arial; background-color: #f79420; -webkit-border-radius: 4px; border-radius: 4px; color: #ffffff; display: block; margin: 0 auto; font-size: 22px; font-weight: 700; line-height: 36px; text-align: center; text-decoration: none; width: 280px; -webkit-text-size-adjust: none;' target='_blank'>Start Fundraising</a></div>"

} else {
document.getElementById('letter').innerHTML = "<div><div id='center-letter' class='center-letter animate-reveal animate-first'> <h1>Happy Birthday!</h1><br><p style='margin: 0 10px;'>My love " + birthdayName + "!<br><br> maaf ya kartu ucapannya, ini buat gantinya sementara sampai nanti siang heheh, jangan sedih ya, nanti aku bakal bawain.<br><br>  Selamat Ulang Tahun Sayang, walapun kemarin ulang tahunmu. doaku untuk pacarku yang bocil ini sehat dan bahagia sayang jangan sedih ya boleh sedih tapi buat seminggu ini jangan sedih sedih ya hehe 🎈🎈, aku sayang kamu. selamat ulang tahun sayang. traktir ya muawh ♥♥ </p></div><div class='animate-reveal animate-second' style='margin-top: 15px;'> <a href='placeholderlink' style='font-family: Arial; background-color: #f79420; -webkit-border-radius: 4px; border-radius: 4px; color: #ffffff; display: block; margin: 0 auto; font-size: 22px; font-weight: 700; line-height: 36px; text-align: center; text-decoration: none; width: 280px; -webkit-text-size-adjust: none</a></div></div>"

}

}