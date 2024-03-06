const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const MIN = 6;

export const validateFields = (name, email, password) => {
  const MIN_NAME = 12;

  if (name.length < MIN_NAME) {
    return true
  } else if (!emailRegex.test(email)) {
    return true
  } else if (password.length < MIN) {
    return true
  } else {  
    return false
  };
};

export const validateLogin = (email, password) => {
  if (!emailRegex.test(email)) {
    return true
  }else if (password.length < MIN){
    return true
  } else {
    return false
  };
};

