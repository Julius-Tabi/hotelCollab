export class booking{

    firstname;
    lastname;
  IdNUm;
      email;
    phonenumber;
    
    roomType;
    CheckIndate;
  CheckOutdate;

    constructor(firstname, lastname,IdNUm,email, phonenumber, roomType, CheckIndate, CheckOutdate){
        this.firstname =firstname;
        this.lastname = lastname;
      this.IdNUm = IdNUm;
       this.email = email;
        this.phonenumber = phonenumber;
        
        this.roomType = roomType;
        this.CheckIndate =CheckIndate;
        this.CheckOutdate = CheckOutdate;
        
    }


}
