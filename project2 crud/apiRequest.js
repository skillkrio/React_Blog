const apiRequest = async (apiUrl = "", optionsObj = null, errMsg = null) => {
  try {
    const response = await fetch(apiUrl, optionsObj);
    if (!response.ok) throw Error("Please Reload the App");
  } catch (error) {
    errMsg = error.message;
  } finally {
    return errMsg;
  }
};
export default apiRequest;
