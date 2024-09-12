import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName: {
        type: String,  // Added the 'type' field
        required: true,  // Changed 'require' to 'required'
        minLength: [3, "First name must contain at least 3 letters"]
    },
    lastName: {
        type: String,
        required: true,  // Changed 'require' to 'required'
        minLength: [3, "Last name must contain at least 3 letters"]
    },
    email: {
        type: String,
        required: true,  // Changed 'require' to 'required'
        validate: [validator.isEmail, "Please provide a valid email"]  // Changed 'validator' to 'validate'
    },
    phone: {
        type: Number,
        required: true,  // Changed 'require' to 'required'
        // 'minLength' is not valid for 'Number' types. Consider using 'min' for minimum value check.
        validate: {
            validator: function(v) {
                return v.toString().length === 10;  // Validating phone number length
            },
            message: props => `${props.value} is not a valid phone number! It should contain 10 digits.`
        }
    },
    message: {
        type: String,
        required: true,  // Changed 'require' to 'required'
        minLength: [10, "Message must contain at least 10 characters"]
    }
});

export const Message = mongoose.model("Message", messageSchema);
