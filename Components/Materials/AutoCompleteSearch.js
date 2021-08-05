import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
/**
 * <AutoCompleteSearch 
        data={["Apple", "ApMax","AppMax","Mango", "Banana", "Orange"]} 
        placeholder="Enter AutoComplete Search Field" 
        onValueReceived={(value)=>alert(JSON.stringify(value))}
         />
 *
 */
export default function AutoCompleteSearch(props){
    const [textInputField, setTextInputField] = useState(props.multiSelect?[]:"");
    const [filterDropdown, setFilterDropdown] = useState([]);
    const [viewDropdown, setViewDropdown] = useState(false);
    useEffect(() => { 
        if(textInputField.length===0) { setViewDropdown(false); }
        setFilterDropdown(props.data.filter(str =>str.includes(textInputField)));
        props.onValueReceived(textInputField);
    }, [textInputField]);
    return (
        <View >
            <Text style={defaultStyles.labelForm}>{props.label}</Text>
            <View style={defaultStyles.autoCompleteFormView}>
                <TextInput style={defaultStyles.inputForm} {...props}
                    value={textInputField}
                    onChange={(input)=>{ 
                                if(props.multiSelect){ setTextInputField([...textInputField, input]); }
                                else {  setTextInputField(input);  }
                                if(input.length>0) { setViewDropdown(true); 
                    } }} />
                {viewDropdown && filterDropdown.length>0 && (
                    <View style={defaultStyles.dropDownView}>
                    {filterDropdown.map((data)=>{
                        return <Text style={defaultStyles.dropDownText}
                        onPress={()=>{
                            if(props.multiSelect){ setTextInputField([...textInputField, data]); }
                                else {  setTextInputField(data);  }
                            setViewDropdown(false);
                        }}>{data}</Text>
                    })}
                    </View>
                 )}
            </View>
            {props.multiSelect && (
                <View style={defaultStyles.multiSelectView}>
                {textInputField.map(data=>{
                return (
                <View style={defaultStyles.selectItemView}>
                     <Text style={defaultStyles.selectItem}>{data} &nbsp;
                        <FontAwesomeIcon name="close" size={20} color="#555"
                        onPress={()=>props.setVisible(!props.visible)}/></Text>
                </View>);
            })}
            </View>)}
        </View>
    );
}

const defaultStyles = StyleSheet.create({ 
    inputForm: { width:'100%',height:50,marginTop:8, borderWidth:1, borderRadius: 8, 
                    borderColor: '#000', backgroundColor: 'white', color:'#000', paddingLeft:20, 
                    paddingRight:20, paddingTop:8, paddingBottom:8 },
    labelForm:{marginTop:10,fontWeight:'bold'},
    autoCompleteFormView:{position:'relative'},
    dropDownView:{position:'absolute',backgroundColor: '#f9f9f9',minWidth:300, 
                    zIndex:1,marginTop:60,borderWidth:1,borderColor:'#000',
                    borderBottomLeftRadius:8,borderBottomRightRadius:8},
    dropDownText:{padding:10},
    multiSelectView:{marginTop:10,flexDirection:'row',flexWrap: 'wrap',flexShrink: 1},
    selectItemView:{margin:5,borderWidth:1, borderColor:'#555',borderRadius:8,backgroundColor:'white'},
    selectItem:{paddingBottom:5,paddingLeft:5,paddingRight:5}
});