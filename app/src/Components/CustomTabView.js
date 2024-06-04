
import React, { useState, useCallback } from 'react';
import { StyleSheet, Text } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import COLORS from '../../Config/Colors';
import uuid from 'react-native-uuid';
import { widthPercentageToDP } from 'react-native-responsive-screen';
const CustomTabView = ({ routes, renderScene }) => {
  const [index, setIndex] = useState(0);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
      renderLabel={({ route, focused }) => (
        <Text style={[focused && { color: COLORS.bgColor, fontWeight: '700' }]}>
          {route.title}
        </Text>
      )}
      scrollEnabled
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    //   key={()=> uuid.v4()}
      lazy
      lazyPreloadDistance={1}
    />
  );
};

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: 'white',
  },
  tab: {
    width: 'auto',
    paddingHorizontal: 35,
  },
  label: {
    color: 'gray',
    fontWeight: '400',
  },
  indicator: {
    backgroundColor: 'orange',
    height: widthPercentageToDP('1%'),
  },
});

export default CustomTabView;
