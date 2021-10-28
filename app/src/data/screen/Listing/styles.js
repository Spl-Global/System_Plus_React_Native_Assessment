import {StyleSheet} from 'react-native';
import {Appcolors, Appfonts} from '../../../design/constants';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Appcolors.WHITE,
  },
  subcontainer: {
    flex: 1,
  },
  cardStyle: {
    backgroundColor: Appcolors.WHITE,
    elevation: 5,
    marginVertical: 20,
    shadowOffset: {height: 1, width: 0},
    width: '90%',
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: 16,
    color: Appcolors.BLACK,
    fontFamily: Appfonts.BOLD,
  },
  simpleTxt: {
    fontSize: 16,
    lineHeight: 25,
    textAlignVertical: 'bottom',
    color: Appcolors.BLACK,
    fontFamily: Appfonts.LIGHT,
  },
  exptyContainer: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
