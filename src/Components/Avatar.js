import React from 'react'

function Avatar({previewAvatar, avatar}) {
    return (
        <div className="avatar">
            <label htmlFor="upload_avatar">
              <img
                src={
                  previewAvatar ||
                  avatar ||
                  "https://img.icons8.com/material-sharp/128/000000/user.png"
                }
                alt="avatar"
              />
              <div className="upload_icon">
                <i className="fas fa-upload"></i>
                <p>Upload</p>
              </div>
            </label>
          </div>
    )
}

export default Avatar
