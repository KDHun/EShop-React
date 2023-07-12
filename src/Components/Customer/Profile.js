import React from 'react';
import classes from './Profile.module.css';
import PH from '../../Image/PassportPhoto.jpg';
const Profile = ({
  firstName,
  middleName,
  lastName,
  dob,
  phone,
  email,
  profilePhoto,
}) => {
  return (
    <div className={classes['profile-card']}>
      <img
        alt={firstName + " Profile Photo"}
        src={PH}
        className={classes['profile-image']}
      />
      <h1 className={classes['profile-details']}>
        {firstName} {middleName} {lastName}
      </h1>
      <table className={classes['profile-table']}>
        <tr className={classes['profile-raw1']} >
          <td className={classes['profile-column1']}>DateOfBirth</td>
          <td className={classes['profile-column2']}>{dob}</td>
        </tr>
        <tr className={classes['profile-raw2']}>
          <td className={classes['profile-column1']}>Phone No.</td>
          <td className={classes['profile-column2']}>{phone}</td>
        </tr>
        <tr className={classes['profile-raw3']}>
          <td className={classes['profile-column1']}>Email</td>
          <td className={classes['profile-column2']}>{email}</td>
        </tr>
      </table>
    </div>
  );
};

export default Profile;
