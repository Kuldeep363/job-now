import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Linking, TouchableWithoutFeedback } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";

const Footer = ({ url }) => {
  const [jobLiked, setJobLiked] = useState(false);
  const handleJobLikeBtnClick = ()=>{
    setJobLiked(prev=>!prev);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn} onPress={handleJobLikeBtnClick}>
        <Image
        source={jobLiked?icons.heart: icons.heartOutline}
        resizeMode="contain"
        style={styles.likeBtnImage}
        />
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.applyBtn}
      onPress={()=>Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
