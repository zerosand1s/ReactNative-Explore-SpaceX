import React, { Component } from 'react';

import AppConfig from './AppConfig';

const getDataForField = (field) => {
  switch(field) {
    case 'missions': return Promise.resolve(fetchMissionDetails());
    case 'rockets': return Promise.resolve(fetchRocketDetails());
  }
}

const fetchMissionDetails = async () => {
  try {
    let response = await fetch(AppConfig.MISSIONS_URL);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

const fetchRocketDetails = async () => {
  try {
    let response = await fetch(AppConfig.ROCKETS_URL);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export default {
  getDataForField
};