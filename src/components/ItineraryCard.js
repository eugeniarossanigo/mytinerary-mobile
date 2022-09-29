import { StyleSheet, Text, View, Image, Button, Input, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import ActivityCard from './ActivityCard';
import { useGetActivityItineraryQuery } from '../redux/activitiesAPI';
import { useCreateNewCommentMutation, useGetAllCommentsMutation } from '../redux/commentsAPI';
import { useSelector } from 'react-redux';
import CommentCard from './CommentCard';

export default function ItineraryCard({itinerary}) {
    const user = ""
    const [open, setOpen] = useState(false)
    const [arrayComments, setArrayComments] = useState([])
    const likesLength = itinerary.likes.length
    
    // const handleClick = () => { open ? setOpen(false) : setOpen(true) }

    const {data: activities} = useGetActivityItineraryQuery(itinerary._id)
    const [showComments] = useGetAllCommentsMutation()

    const reloaded = useSelector(state => state.reload.reloadState)

    const handleShowComments = async() =>{
        try {
            let res = await showComments(itinerary._id)
            setArrayComments(res?.data.response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleShowComments()
    }, [reloaded, itinerary])

    // const onPress = () => {
    //     console.log("hi")
    // }

    // const newInput = useRef("")
    
    // const user = useSelector(state => state.auth.user)
    // const userId = user?.id
    // const dispatch = useDispatch()
    // const [likeDislike] = useLikeDislikeMutation()
    // const [deleteItinerary] = useGetDeleteItineraryMutation()
   
        
    // const [addComment] = useGetNewCommentMutation()
    
    return (
        <>
            <View key={itinerary?._id} style={styles.itineraryContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{itinerary?.name}</Text>
                </View>
                {/* user && (user?.id === itinerary.user._id) && */}
                { user && 
                    <View style={styles.btnsContainer}>
                        <View style={styles.btn}>
                            <Button color='#377771' title="EDIT" onPress={() => console.log("edit")} />
                        </View>
                        <View style={styles.btn}>
                            <Button color='#377771' title="DELETE" onPress={() => console.log("delete")} />
                        </View>
                    </View>
                }
                <View style={styles.info}>
                    <View>
                        <Text style={styles.h3}>Duration:</Text>
                        <Text style={styles.h2}>{itinerary?.duration} hours</Text>
                    </View>
                    <View>
                        <Text style={styles.h3}>Price:</Text>
                        <Text style={styles.h2}>${itinerary?.price}</Text>
                    </View>
                    <View>
                        <Text style={styles.h3}>Likes:</Text>
                        <View style={styles.likes}>
                            {/* user && itinerary.likes.includes(userId) ? */}
                            { user ?
                                <Image style={styles.heart} source={require("../../assets/heart-full.png")} />
                            :
                                <Image style={styles.heart} source={require("../../assets/heart-empty.png")} />
                            }
                            <Text>{likesLength}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.info}>
                    <View>
                        <Text style={styles.h3}>Tags:</Text>
                        <Text style={styles.h2}>{itinerary?.tags.map(tag => " #"+tag)}</Text>
                    </View>
                </View>

                <View style={styles.activitiesContainer}>
                    {activities?.response.map(activity => <ActivityCard activity={activity} />)}
                    {/* userid={itinerary.user._id} */}
                </View>
                <Text style={styles.p}>Leave us your comment below</Text>
                <View style={styles.btnsContainer}>
                    <TouchableOpacity style={styles.btnDown} onPress={() => { open ? setOpen(false) : setOpen(true) }}>
                        <Image style={styles.arrowDown} source={require('../../assets/down-arrow.png')}></Image>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.commentsContainer}>
                    {arrayComments?.map(comment => <CommentCard comment={comment}/>)}
                </View> */}
                { open ?
                    <View>
                        {/* { user && 
                            <form className='comment-input' onSubmit={sendComment}>
                                <input type="text" name="comment" placeholder="Please leave a comment here!" ref={newInput}/>
                                <button className="arrow-send" type="submit"><img src="/images/arrow-send.png" alt="arrow"></img></button>
                            </form>
                        } */}
                        <View style={styles.commentsContainer}>
                            {arrayComments?.map(comment => <CommentCard comment={comment}/>)}
                        </View>
                    </View>
                : null
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    itineraryContainer: {
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10
    },
    titleContainer: {
        width: 360,
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 10
    },
    title: {
        color: '#78788c',
        borderBottomColor: '#377771',
        borderBottomWidth: 2,
        fontSize: 22,
        textTransform: 'uppercase',
        fontWeight: '800'
    },
    btnsContainer:{
        width: 360,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 15
    },
    btn: {
        width: 80,
        paddingRight: 5,
        paddingLeft: 5
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10
    },
    likes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    h2: {
        color: '#000',
        fontWeight: '300',
    },
    h3: {
        color: '#000',
        fontWeight: '700',
    },
    heart: {
        width: 15,
        height: 15
    },
    activitiesContainer: {
        alignSelf: 'center'
    },
    p: {
        alignSelf: 'center'
    },
    commentsContainer: {
        alignSelf: 'center'
    },
    btnDown: {
        paddingTop: 5,
    },
    arrowDown: {
        width: 20,
        height: 20
    }
});
