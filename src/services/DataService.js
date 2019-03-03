import AppConfig from './AppConfig';

const getDataForField = async (field) => {
  try {
    let response = await fetch(AppConfig[field]);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export default {
  getDataForField
};