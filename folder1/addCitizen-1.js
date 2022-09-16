import React, { Component } from "react";
import axios from 'axios';


export default class addCitizen extends Component{
    //constructor 
    constructor(props) {
        super(props);

        this.onChangeFullname=this.onChangeFullname.bind(this);
        this.onChangeDistrict=this.onChangeDistrict.bind(this);
        this.onChangeDate=this.onChangeDate.bind(this);
        this.onChangePlaceofbirth=this.onChangePlaceofbirth.bind(this);
        this.onChangeDivision=this.onChangeDivision.bind(this);
        this.onChangeSex=this.onChangeSex.bind(this);
        this.onChangefathersid=this.onChangefathersid.bind(this);
        this.onChangemothersid=this.onChangemothersid.bind(this);
        this.onChangeMstatus=this.onChangeMstatus.bind(this);
        this.onChangegrandfathersid=this.onChangegrandfathersid.bind(this);
        this.onChangeinformantid=this.onChangeinformantid.bind(this);
        this.onChangeDateofReg=this.onChangeDateofReg.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        
        
        this.state={
            district:"",
            division:"",
            date: new Date(),
            placeofBirth:"",
            fullname:"",
            sex:"",
            fatherId:"",
            motherId:"",
            parentsmaritalStatus:"",
            grandfatherId:"",
            informantid:"",
            dateofReg:new Date(),

            districts:[],
            genders:[]

        }

    }

    componentDidMount(){
        this.setState({
            districts:["Colombo","Gampaha","Kaluthara","Kandy","Matale","Nuwara Eliya","Galle","Matara","Hambantota", "Jaffna", "Kilinochchi","Mannar","Vavuniya","Mullaitivu","Batticaloa","Ampara","Trincomalee","Kurunegala","Puttalam","Anuradhapura" ,"Polonnaruwa","Badulla","Moneragala","Ratnapura","Kegalle"],
            genders:["Female","Male"],
            district:"Colombo",
            sex:"Female"
        })
    }

        
    onChangeDistrict(e){
        this.setState({
            district:e.target.value
        })
    }

        
    onChangeDivision(e){
        this.setState({
            division:e.target.value
        })
    }


    onChangeFullname(e){
        
        this.setState({
            fullname:e.target.value
        })
    }

    onChangeDate(e){
        this.setState({
            date:e.target.value
        })

    }

    onChangePlaceofbirth(e){
        this.setState({
            placeofBirth:e.target.value
        })
    }

    onChangeSex(e){
        this.setState({
            sex:e.target.value
        })
    }

    onChangefathersid(e){
        this.setState({
            fatherId:e.target.value
        })
    }

    onChangemothersid(e){
        this.setState({
            motherId:e.target.value
        })
    }


    onChangeMstatus(e){
        this.setState({
            parentsmaritalStatus:e.target.value
        })
    }

    onChangegrandfathersid(e){
        this.setState({
            grandfatherId:e.target.value
        })
    }

    onChangeinformantid(e){
        this.setState({
            informantid:e.target.value
        })
    }

    onChangeDateofReg(e){
        this.setState({
            dateofReg:e.target.value
        })
    }


    onSubmit(e){
        e.preventDefault();//prevent default form submit

        const citizen={
            district:this.state.district,
            division:this.state.division,
            date:this.state.date,
            placeofBirth:this.state.placeofBirth,
            fullname:this.state.fullname,
            sex:this.state.sex,
            fatherId:this.state.fatherId,
            motherId:this.state.motherId,
            parentsmaritalStatus:this.state.parentsmaritalStatus,
            grandfatherId:this.state.grandfatherId,
            informantid:this.state.informantid,
            dateofReg:this.state.dateofReg

            


        }
        
        console.log(citizen);
        axios.post('http://localhost:5000/citizens/add',citizen)
        .then(res=>console.log(res.data));
        
        
    }

    render(){
        return(
            <div>
                <h3>Add citizen</h3>

                <form onSubmit={this.onSubmit}>


                    
                    <div className="form-group">
                        <label>District: </label>

                        <select 
                        required
                        className="form-control"
                        value={this.state.district}
                        onChange={this.onChangeDistrict}>
                        {
                            this.state.districts.map(function(district){
                                return <option
                                    key={district}
                                    value={district}>{district}
                                </option>
                            })
                        }
                        </select>

                    </div>

                    <div className="form-control">
                        <label>Division: </label>
                        <input type="text"
                            required
                            value={this.state.division}
                            onChange={this.onChangeDivision}
                        />
                    </div>

                    <div className="form-group">
                        <label>Date: </label>
                        <input type="date"
                            required
                            className="form-control"
                            value={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>

                    <div className="form-group">
                        <label>Place Of Birth: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.placeofBirth}
                            onChange={this.onChangePlaceofbirth}
                        /> 

                    </div>

                    <div className="form-control">
                        <label>Full Name: </label>
                        <input type="text"
                            required
                            value={this.state.fullname}
                            onChange={this.onChangeFullname}
                        />
                    </div>

                    <div className="form-group">
                        <label>Sex: </label>

                        <select 
                        required
                        className="form-control"
                        value={this.state.sex}
                        onChange={this.onChangeSex}>
                        {
                            this.state.genders.map(function(sex){
                                return <option
                                    key={sex}
                                    value={sex}>{sex}
                                </option>
                            })
                        }
                        </select>

                    </div>

                    <div className="form-group">
                        <label>Father's citizen id: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.fatherId}
                            onChange={this.onChangefathersid}
                        />

                    </div>

                    <div className="form-group">
                        <label>Mother's citizen id: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.motherId}
                            onChange={this.onChangemothersid}
                        />
                    </div>

                    <div className="form-group">
                        <label>Were parents married?: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.parentsmaritalStatus}
                            onChange={this.onChangeMstatus}
                        />
                    </div>

                    <div className="form-group">
                        <label>Grandfather's citizen id: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.grandfatherId}
                            onChange={this.onChangegrandfathersid}
                        />
                    </div>

                    <div className="form-group">
                        <label>informant's citizen id: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.informantid}
                            onChange={this.onChangeinformantid}
                        />
                    </div>

                    <div className="form-group">
                        <label>Date of Registration: </label>
                        <input type="date"
                            required
                            className="form-control"
                            value={this.state.dateofReg}
                            onChange={this.onChangeDateofReg}
                        />
                    </div>



                    <div className="form-group">
                        <input type="submit" value="add"></input>
                    </div>
                </form>
            </div>

        )
    }



}