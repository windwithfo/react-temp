const BTN_CLT = 'BTN_CTL';

function btnControl(disabled) {
  return {
    type: BTN_CLT,
    disabled
  };
}

export default {
  btnControl
};
