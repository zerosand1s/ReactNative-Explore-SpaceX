import React, { Component } from 'react';

import AppConfig from './AppConfig';

const getDataForField = (field) => {
  switch(field) {
    case 'missions': fetchMissionDetails();
    case 'rockets': fetchRocketDetails();
  }
}

const fetchMissionDetails = async () => {
  try {
    let response = await fetch(AppConfig.MISSIONS_URL);
    console.log(response.json());
  } catch (error) {
    console.log(error);
  }
}

const fetchRocketDetails = async () => {
  try {
    let response = await fetch(AppConfig.ROCKETS_URL);
    console.log(response.json());
  } catch (error) {
    console.log(error);
  }
}

export default {
  getDataForField
};