import {StyleSheet} from 'react-native';
import {Appcolors, Appfonts} from '../../constants';

export default styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    alignItems: 'center',
  },
  outerLightCircle: {
    height: 19,
    width: 19,
    borderRadius: 9.5,
    backgroundColor: Appcolors.LIGHT_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerSolidCircle: {
    height: 11,
    width: 11,
    borderRadius: 5.5,
    backgroundColor: Appcolors.GREEN,
  },
  cardStyle: {
    backgroundColor: Appcolors.GREEN,
    borderRadius: 12,
  },
  dataContainer: {
    paddingVertical: 12,
    paddingHorizontal: 22,
  },
  timeContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  timeAtstyle: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Appfonts.BOLD,
    color: Appcolors.LIGHT_GREY,
  },
  timeStyle: {
    fontSize: 12,
    lineHeight: 20,
    color: Appcolors.LIGHT_GREY,
    fontFamily: Appfonts.MEDIUM,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  iconContainer: {
    width: 12,
    height: 15,
    marginEnd: 7,
  },
  locationText: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Appfonts.BOLD,
    color: Appcolors.WHITE,
    textAlignVertical: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  imgStyle: {
    height: '100%',
    width: '100%',
  },
  profileContainer: {
    height: 24,
    width: 24,
    borderRadius: 3,
    overflow: 'hidden',
    marginEnd: 8,
  },
  nameStyle: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Appfonts.MEDIUM,
    color: Appcolors.WHITE,
    textAlignVertical: 'center',
  },
  statusContainer: {
    backgroundColor: Appcolors.WHITE,
    borderRadius: 100,
    alignSelf: 'flex-start',
  },
  statusText: {
    fontSize: 14,
    lineHeight: 20,
    paddingVertical: 3.5,
    paddingHorizontal: 8,
    fontFamily: Appfonts.MEDIUM,
    color: Appcolors.GREEN,
  },
});
