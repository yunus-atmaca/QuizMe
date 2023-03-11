import type {StackScreenProps} from '@react-navigation/stack';
import type {NavigationProp} from '@react-navigation/core';
import {NavigationContainerRefWithCurrent} from '@react-navigation/core';
import {createNavigationContainerRef} from '@react-navigation/native';

export type RootStack = {
  Home: undefined;
};

export type AllRoutes = RootStack;
export type RouteProps = NavigationProp<AllRoutes>;

//Stack Screens
export type StackRoutes = RootStack;
//Stack Screen Props Creator
export type SSPropsCreator<K extends keyof StackRoutes> = StackScreenProps<
  StackRoutes,
  K
>;

const _navReference = createNavigationContainerRef<AllRoutes>();
export const getNavContainerRef =
  (): NavigationContainerRefWithCurrent<AllRoutes> => {
    return _navReference;
  };
