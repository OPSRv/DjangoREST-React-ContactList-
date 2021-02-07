import React from "react";
import { Link } from "react-router-dom";
import ContactDataService from "../../services/Service";
import "./contact-item.css";

class ContactItem extends React.Component {
  render() {
    // console.log("Inside contact item => ", this.props);
    const {
      name,
      gender,
      address,
      phone,
      email,
      image,
      star,
      isStar,
      editContact,
      onDeleteContact,
    } = this.props;

    const URL = `https://randomuser.me/api/portraits/${gender}/${image}.jpg`;
    // console.log(this.props.star);
    let isNotstar = "far fa-star ";
    if (star) {
      isNotstar = "fas fa-star ";
    } else {
      isNotstar = "far fa-star";
    }
    // console.log(this.props, "props contact ");
    return (
      <li className="list-group-item">
        <div className="row w-100">
          <div className="col-12 col-sm-6 col-md-3 px-0">
            <img
              src={URL}
              alt="Mike Anamendolla"
              className="rounded-circle mx-auto d-block img-fluid"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
            <span
              className={`${isNotstar} fa-2x text-success float-right pulse`}
              title="online now"
              onClick={isStar}
            ></span>
            <Link
              to="/edit"
              className="float-right pulse"
              onClick={editContact}
            >
              <i className="far fa-edit fa-2x"></i>
            </Link>
            <span
              className="fa fa-trash fa-2x text-danger float-right pulse"
              title="Delete"
              onClick={onDeleteContact}
            ></span>
            <label className="name lead">{name}</label>
            <br />
            <span
              className="fa fa-map-marker fa-fw text-muted"
              data-toggle="tooltip"
              title=""
              data-original-title="5842 Hillcrest Rd"
            ></span>
            <span className="text-muted address">{address}</span>
            <br />
            <span
              className="fa fa-phone fa-fw text-muted"
              data-toggle="tooltip"
              title=""
              data-original-title="(870) 288-4149"
            ></span>
            <span className="text-muted small">{phone}</span>
            <br />
            <span
              className="fa fa-envelope fa-fw text-muted"
              data-toggle="tooltip"
              data-original-title=""
              title=""
            ></span>
            <span className="text-muted small text-truncate">{email}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default ContactItem;
