export const phoneValidator = (value) => {
  const regMobile =
    /^((\+|00)86)?1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/;
  return regMobile.test(value);
};
