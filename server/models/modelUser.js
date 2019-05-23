import mongoose from 'mongoose';

const bcrypt = require('bcrypt');
const validator = require('validator');
//const mongoosePaginate = require('mongoose-paginate-v2');

let ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        validate: {
            validator: validator.isEmail,
            message: 'EMAIL_IS_NOT_VALID'
        },
        lowercase: true,
        unique: true,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    driver_s_license:{
        type: Date,
        required: true
    },
    cars:[ObjectId]
});

const hash = (user, salt, next) => {
    bcrypt.hash(user.password, salt, null, (error, newHash) => {
        if (error) {
            return next(error)
        }
        user.password = newHash;
        return next()
    })
};

const genSalt = (user, SALT_FACTOR, next) => {
    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
        if (err) {
            return next(err)
        }
        return hash(user, salt, next)
    })
};

// UserSchema.pre('save', function(next) {
//     const that = this;
//     const SALT_FACTOR = 10;
//     if (!that.isModified('password')) {
//         return next()
//     }
//     return genSalt(that, SALT_FACTOR, next)
// });

UserSchema.methods.comparePassword = function(passwordAttempt, cb) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) =>
        err ? cb(err) : cb(null, isMatch)
    )
};

// UserSchema.statics.findByLogin = async function (login) {
//     let user = await this.findOne({
//         username: login,
//     });
//
//     if (!user) {
//         user = await this.findOne({email: login});
//     }
//
//     return user;
// };

//UserSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('users', UserSchema);
