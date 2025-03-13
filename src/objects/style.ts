import { Dimensions, StyleSheet } from 'react-native';

export const TextInputCSS = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#000',
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '100%',
    height: 50,
  },
  labelView: {
    marginLeft: 10,
    position: 'absolute',
    backgroundColor: '#fff',
    top: -10,
    zIndex: 1,
    paddingHorizontal: 5,
  },
  label: {
    fontSize: 14,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  helperText: {
    marginLeft: 10,
    fontSize: 14,
  },
});

export const ActivityIndicatorCSS = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height * 0.5,
  },
});

export const SelectCSS = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#000',
    borderRadius: 8,
    height: 50,
  },
  labelView: {
    marginLeft: 10,
    position: 'absolute',
    backgroundColor: '#fff',
    top: -10,
    zIndex: 1,
    paddingHorizontal: 5,
  },
  label: {
    fontSize: 14,
  },
  selectWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  selector: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
  },
  selectedText: {
    fontSize: 16,
    alignSelf: 'center',
  },
  resetButton: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#ff4d4d',
    borderRadius: 5,
  },
  resetButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    maxHeight: Dimensions.get('screen').height / 2,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '5%',
  },
  searchContainer: {
    width: '100%',
    height: '10%',
    marginBottom: '10%'
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  selectedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  sideContainer: {
    minWidth: 30,
    alignItems: 'center',
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'left',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ff4d4d',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export const MainContainer = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
