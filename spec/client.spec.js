import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Info from '../client/src/components/Info.jsx';
import Rating from '../client/src/components/Rating.jsx';
import AdditionalInfo from '../client/src/components/AdditionalInfo.jsx';
import App from '../client/src/components/App.jsx'

describe('Client/React Tests', () => {
  test('check to see if app renders', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  })

  test('check to see if info renders', () => {
    const testApp = {
      id : 5,
      name : 'Tester',
      author : 'Sir Tester',
      imageUrl : 'Testing Image',
      category : 'Test',
      updatedAt : 'Testing Date',
      size : 'Testing Size',
      editorChoice : true,
      rating: 4,
      ratings: 1234,
      currentVersion: 1.23,
      installs : 12345,
      _id: 'Testing _id',
      __v: 'Testing __v'
    }
    const component = shallow(<Info app={testApp} />)

    expect(component).toMatchSnapshot();
  })

  test('check to see if rating renders', () => {
    const testRating = {
      rating: 1,
      ratings: 12345
    }
    const component = shallow(<Rating rating={testRating.rating} ratings={testRating.ratings} />)

    expect(component).toMatchSnapshot();
  })

  test('check to see if AdditionalInfo renders', () => {
    const testAddInfo = {
      size: "Test Size",
      currentVersion: 1.23,
      updatedAt: 'Test Date',
      installs: 12345
    }
    const component = shallow(<AdditionalInfo size={testAddInfo.size} currentVersion={testAddInfo.currentVersion} updatedAt={testAddInfo.updatedAt} installs={testAddInfo.installs} />)

    expect(component).toMatchSnapshot();
  })
})