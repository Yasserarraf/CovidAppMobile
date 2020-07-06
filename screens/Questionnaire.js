import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { SimpleSurvey } from 'react-native-simple-survey';

import {info} from './Login';







const survey = [
    {
        questionType: 'Info',
        questionText: 'Bienvenue sur l’outil auto-diagnostic. Ce questionnaire vise, uniquement, à vous orienter vers le service médical de proximité. Ceci est en fonction de votre état de santé et les symptômes déclarés. L’avis fourni n’a aucune valeur médicale.'
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Avez-vous été testé pour le corona virus?',
        questionId: 'question1',
        options: [
            {
                optionText: 'Non effectué.',
                value: 'Non effectué.'
            },
            {
                optionText: 'Oui. et le résultat du test est négatif.',
                value: 'Oui. et le résultat du test est négatif.'
            },
            {
                optionText: 'Oui et en attente du résultat du test',
                value: 'Oui et en attente du résultat du test'
            },
            {
                optionText: 'Oui. et le résultat du test est positif.',
                value: 'Oui. et le résultat du test est positif.'
            },
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            "En ce qui concerne l'isolement médical. lequel des éléments suivants s'applique à vous:",
        questionId: 'question2',
        options: [
            {
                optionText: "Je suis en isolement médical parce que j'ai rencontré une personne contaminée.",
                value: "Je suis en isolement médical parce que j'ai rencontré une personne contaminée."
            },
            {
                optionText: "Je suis en isolement médical parce que j'ai des symptômes.",
                value: "Je suis en isolement médical parce que j'ai des symptômes."
            },
            {
                optionText: "Je ne suis pas en isolement médical mais j'étais proche de quelqu'un en isolement médical.",
                value: "Je ne suis pas en isolement médical mais j'étais proche de quelqu'un en isolement médical."
            },
            {
                optionText: 'Je ne suis pas en isolement médical.',
                value: 'Je ne suis pas en isolement médical.'
            },
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            "Avez-vous actuellement ou avez-vous déjà vécu l'une des situations suivantes:",
        questionId: 'question3',
        questionSettings: {
            maxMultiSelect: 3,
            minMultiSelect: 2,
        },
        options: [
            {
                optionText: 'Insuffisance cardiaque chronique.',
                value: 'Insuffisance cardiaque chronique.'
            },
            {
                optionText: 'Cas précédent de crise cardiaque.',
                value: 'Cas précédent de crise cardiaque.'
            },
            {
                optionText: 'Diabète.',
                value: 'Diabète.'
            },
            {
                optionText: 'Hypertension artérielle.',
                value: 'Hypertension artérielle.'
            },
            {
                optionText: 'Maladie rénale chronique.',
                value: 'Maladie rénale chronique.'
            },
            {
                optionText: 'Maladie pulmonaire chronique.',
                value: 'Maladie pulmonaire chronique.'
            },
            {
                optionText: 'Le cancer.',
                value: 'Le cancer.'
            },
            {
                optionText: 'Système immunitaire affaibli.',
                value: 'Système immunitaire affaibli.'
            },
            {
                optionText: 'Prenez des médicaments anti-immuns.',
                value: 'Prenez des médicaments anti-immuns.'
            },
        ]
    },{
        questionType: 'MultipleSelectionGroup',
        questionText:
            "-Avez-vous eu les symptômes suivants aujourd'hui?.Veuillez les cocher si c'est le cas :",
        questionId: 'question4',
        questionSettings: {
            maxMultiSelect: 3,
            minMultiSelect: 2,
        },
        options: [
            {
                optionText: 'Fièvre supérieure à 38 degrés.',
                value: 'Fièvre supérieure à 38 degrés.'
            },
            {
                optionText: 'Difficulté à respirer.',
                value: 'Difficulté à respirer.'
            },
            {
                optionText: "Maux d'estomac.",
                value: "Maux d'estomac."
            },
            {
                optionText: 'Douleurs musculaires.',
                value: 'Douleurs musculaires.'
            },
            {
                optionText: 'Fatigue ou faiblesse importante.',
                value: 'Fatigue ou faiblesse importante.'
            },
            {
                optionText: 'Congestion nasale ou nez qui coule.',
                value: 'Congestion nasale ou nez qui coule.'
            },
            {
                optionText: 'Inflammation de la gorge.',
                value: 'Inflammation de la gorge.'
            },
            {
                optionText: 'Toux sèche.',
                value: 'Toux sèche.'
            },
            {
                optionText: 'Toux Avec mucus.',
                value: 'Toux Avec mucus.'
            },
        ]
    },

     {
        questionType: 'Info',
        questionText: "C'est tout pour le moment , nous allons vous envoyer le resultat dés que le docteur analyse votre fiche .Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation."
    },
];
export default class Questionnaire extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: 'GREEN',
                height: 40,
                elevation: 5,
            },
            headerTintColor: '#fff',
            headerTitle: 'Sample Survey',
            headerTitleStyle: {
                flex: 1,
            }
        };
    }

    constructor(props) {
        super(props);
        this.state = { backgroundColor: '#003f5c', answersSoFar: '' };
    }

    onSurveyFinished(answers) {
    	const infoQuestionsRemoved = [...answers];
    	 const answersAsObj = {};
       const email = info['email'] ;
         console.log(email);

        for (const elem of infoQuestionsRemoved) { answersAsObj[elem.questionId] = elem.value; }

        fetch('http://localhost:8000/api/Fiche',{
            method:'POST',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body:JSON.stringify(answersAsObj)
          }).then(res => res.json())
          .then(resData =>{
            console.log(resData);
          });



    }
    onAnswerSubmitted(answer) {
        this.setState({ answersSoFar: JSON.stringify(this.surveyRef.getAnswers(), 2) });
        switch (answer.questionId) {
            case 'favoriteColor':
                if (COLORS.includes(answer.value.toLowerCase())) {
                    this.setState({ backgroundColor: answer.value.toLowerCase() });
                }
                break;

            default:
                break;
        }
    }

     renderPreviousButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={'black'}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={'GREEN'}
                    title={'Previous'}
                />
            </View>
        );
    }

    renderNextButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={'black'}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={'GREEN'}
                    title={'Next'}
                />
            </View>
        );
    }

    renderFinishedButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    title={'Finished'}
                    onPress={onPress}
                    disabled={!enabled}
                    color={'black'}
                />
            </View>
        );
    }
     renderButton(data, index, isSelected, onPress) {
        return (
            <View
                key={`selection_button_view_${index}`}
                style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}
            >
                <Button
                    title={data.optionText}
                    onPress={onPress}
                    color={isSelected ? 'green' : '#003f5c' }
                    style={isSelected ? { fontWeight: 'bold' } : {}}
                    key={`button_${index}`}
                />
            </View>
        );
    }
    renderQuestionText(questionText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text numLines={1} style={styles.questionText}>{questionText}</Text>
            </View>
        );
    }
    renderInfoText(infoText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={styles.infoText}>{infoText}</Text>
            </View>
        );
    }
    render() {
        return (
            <View style={[styles.background, { backgroundColor: this.state.backgroundColor }]}>
                <View style={styles.container}>
                    <SimpleSurvey
                        ref={(s) => { this.surveyRef = s; }}
                        survey={survey}
                        renderSelector={this.renderButton.bind(this)}
                        containerStyle={styles.surveyContainer}
                        selectionGroupContainerStyle={styles.selectionGroupContainer}
                        navButtonContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around' }}
                        renderPrevious={this.renderPreviousButton.bind(this)}
                        renderNext={this.renderNextButton.bind(this)}
                        renderFinished={this.renderFinishedButton.bind(this)}
                        renderQuestionText={this.renderQuestionText}
                        onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
                        onAnswerSubmitted={(answer) => this.onAnswerSubmitted(answer)}

                        renderInfo={this.renderInfoText}
                    />

                </View>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',

        elevation: 20,
        borderRadius: 10,
        flex: 1,
    },
    answersContainer: {
        width: '90%',
        maxHeight: '20%',
        marginTop: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,

    },
    surveyContainer: {
        width: 'auto',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignContent: 'center',
        padding: 5,
        flexGrow: 0,
    },
    selectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        alignContent: 'flex-end',
    },
    background: {
        flex: 1,
        minHeight: 800,
        maxHeight: 800,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },

    infoText: {
        marginBottom: 20,
        fontSize: 20,
        marginLeft: 10
    },
});


/*function fiche */
