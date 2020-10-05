export class booking{

    firstname;
    lastname;
    IdNUm;
    phonenumber;
    email;
    NoofRooms;
    roomType;
    CheckIndate;
  CheckOutdate;

    constructor(firstname, lastname,IdNUm, phonenumber, email, NoofRooms, roomType, CheckIndate, CheckOutdate){
        this.firstname =firstname;
        this.lastname = lastname;
        this.IdNUm = IdNUm;
        this.phonenumber = phonenumber;
        this.email = email;
        this.NoofRooms = NoofRooms;
        this.roomType = roomType;
        this.CheckIndate =CheckIndate;
        this.CheckOutdate = CheckOutdate;
        
    }


}
