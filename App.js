import * as React from 'react'; import { StyleSheet, View, Text ,Button, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Feed ({ navigation }) {
return (
  
<View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Associação GEGAI</Text>
        <View style={styles.headerButtons}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity> 
        </View>
      </View>
      <View style={styles.retangulo}>
        <Text style={styles.legenda}>Legenda da imagem</Text>
      </View>
      <View style={styles.retangulo2}>
        <Text style={styles.legenda}>Legenda da imagem</Text>
      </View>
      <View style={styles.footer1}>
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.footerText1}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Doar')}>
        <Text style={styles.footerText1}>Razões para doar</Text>
      </TouchableOpacity>
    </View>
    </View>
    
 );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'bisque',
  },
  header: {
    backgroundColor: '#FF4375',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 27,
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  button: {
    backgroundColor: 'transparent',
    padding: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  footer: {
    backgroundColor: '#FF4375',
    padding: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
   marginBottom: -17, // Adicionando margem inferior ao rodapé
  },
  retangulo: {
    width: 1600,
    height: 400,
    backgroundColor: '#FFC0CB',
    borderWidth: 2,
    borderColor: '#FF69B4',
    borderRadius: 5,
    position: 'relative',
    marginTop: 15,
    marginBottom: 20, // Adicionando margem inferior ao retângulo
  },
  retangulo2: {
    width: 1600,
    height: 400,
    backgroundColor: '#FFC0CB',
    borderWidth: 2,
    borderColor: '#FF69B4',
    borderRadius: 5,
    position: 'relative',
    marginTop: 15,
    marginBottom: 20, // Adicionando margem inferior ao retângulo
  },
  legenda: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    color: 'white',
    fontSize: 12,
  },
                                      


  container1: {
    flex: 1,
    backgroundColor: '#ffdbc5',
  },
  header1: {
    backgroundColor: '#ff4375',
    color: '#fff',
    textAlign: 'left',
    padding: 10,
  },
  headerText1: {
    color: '#fff',
  },
  main1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTitle1: {
    fontSize: 24,
    marginBottom: 10,
  },

  form1: {
    width: 300,
    padding: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#ff4375',
  },
  label1: {
    marginBottom: 5,
    color: '#fff',
  },
  input1: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  footer1: {
    backgroundColor: '#ff4375',
    color: '#fff',
    textAlign: 'left',
    padding: 10,
  },
  footerText1: {
    color: '#fff',
  },




  container2: {
    flex: 1,
    backgroundColor: '#ffdbc5',
  },
  header2: {
    backgroundColor: '#ff4375',
    color: '#fff',
    textAlign: 'center',
    padding: 16,
  },
  headerText2: {
    color: '#fff',
    fontSize: 20,
  },
  heading2: {
    fontSize: 18,
    margin: 10,
  },
  tabContent2: {
    flex: 1,
  },
  tabPane2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form2: {
    maxWidth: 600,
    margin: 10,
  },
  label2: {
    fontSize: 16,
    marginBottom: 5,
  },
  textArea2: {
    width: 600,
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  publishButton2: {
    backgroundColor: '#ff4375',
    padding: 10,
    borderRadius: 5,
  },
  buttonText2: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  footer2: {
    backgroundColor: '#ff4375',
    color: '#fff',
    textAlign: 'center',
    padding: 16,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },


  container3: {
    backgroundColor: 'bisque',
  },
  header3: {
    backgroundColor: '#FF4375',
    padding: 20,
    alignItems: 'center',
  },
  headerText3: {
    color: 'white',
    fontSize: 27,
  },
  headerButtons3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  button3: {
    backgroundColor: 'transparent',
    padding: 5,
  },
  buttonText3: {
    color: 'white',
    fontSize: 16,
  },
  footer3: {
    backgroundColor: '#FF4375',
    padding: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    border: 0,
    marginBottom: 0, // Adicionando margem inferior ao rodapé
  },
  retangulo3: {
    width: 650,
    height: 500,
    backgroundColor: '#FFC0CB',
    borderWidth: 2,
    borderColor: '#FF69B4',
    borderRadius: 5,
    position: 'relative',
    marginTop: 15,
    marginBottom: 20, // Adicionando margem inferior ao retângulo
  },
 
  legenda3: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    color: 'white',
    fontSize: 13,
  },
});

function Login ({ navigation }) {
  return (
    <View style={styles.container1}>
    <View style={styles.header1}>
      <Text style={styles.headerText1}>Associação GEGAI</Text>
    </View>
    <View style={styles.main1}>
      <Text style={styles.loginTitle1}>Faça seu Login</Text>

      <View style={styles.form1}>
        <Text style={styles.label1}>ONG:</Text>
        <TextInput style={styles.input1} placeholder="Digite sua ONG" />

        <Text style={styles.label1}>Senha:</Text>
        <TextInput style={styles.input1} placeholder="Digite sua senha" secureTextEntry />

        <Button title="Entrar" onPress={() => {}} />
      </View>
    </View>
    <View style={styles.footer1}>
    <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
        <Text style={styles.footerText1}>Feed</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Postagem')}>
        <Text style={styles.footerText1}>Publicar</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
  }

  function Postagem ({ navigation }) {
    return (
      <View style={styles.container2}>
      <View style={styles.header2}>
        <Text style={styles.headerText2}>Associação GEGAI</Text>
      </View>
     
      <Text style={styles.heading2}>Escreva sua publicação aqui:</Text>
 
      <View style={styles.tabContent2}>
        <View style={styles.tabPane2}>
          <View style={styles.form2}>
            <Text style={styles.label2}>Conteúdo:</Text>
            <TextInput
              style={styles.textArea2}
              multiline={true}
              numberOfLines={8}
              required
            />
            <TouchableOpacity
              style={styles.publishButton2}
              onPress={() => console.log("Publicar")} // Replace with your submit function
            >
              <Text style={styles.buttonText2}>Publicar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer1}>
    <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
        <Text style={styles.footerText1}>Feed</Text>
      </TouchableOpacity>
    </View>
    </View>
    );
    }

    function Doar ({ navigation }) {
      return (
        <View style={styles.container3}>
        <View style={styles.header3}>
          <Text style={styles.headerText3}>Associação GEGAI</Text>
          <View style={styles.headerButtons3}>
          </View>
        </View>
        <View style={styles.retangulo3}>
          <Text style={styles.legenda3}>
            <ul>
              <h2>Ajuda a quem precisa: As doações ajudam a fornecer recursos essenciais para aqueles que precisam, como comida, abrigo, educação e assistência médica. Sua contribuição pode fazer a diferença na vida de alguém que está passando por dificuldades.</h2>
              <li>Impacto positivo na comunidade: As doações podem ter um impacto positivo na comunidade, ajudando a melhorar a qualidade de vida das pessoas e a promover o desenvolvimento sustentável.</li>
              <li>Responsabilidade social: Fazer doações é uma maneira de exercer a responsabilidade social e contribuir para o bem-estar da sociedade como um todo.</li>
              <li>Incentivo para outros: Ao fazer uma doação, você pode inspirar outras pessoas a fazerem o mesmo. Isso cria um efeito multiplicador que pode resultar em um impacto ainda maior.</li>
              <li>Gratidão e satisfação pessoal: Fazer uma doação pode trazer uma sensação de gratidão e satisfação pessoal por saber que você está fazendo a diferença na vida de alguém.</li>
              <li>Benefícios fiscais: Em muitos países, as doações para instituições de caridade são dedutíveis de impostos, o que pode resultar em benefícios fiscais para você.</li>
              <li>Investimento no futuro: Ao fazer doações para instituições de caridade, você está investindo no futuro, ajudando a criar um mundo melhor para as gerações futuras.</li>
              <li>Consciência e educação: Fazer doações também pode ajudar a aumentar a conscientização sobre questões importantes e educar as pessoas sobre como elas podem fazer a diferença.</li>
              <li>Exemplo para os outros: Fazer doações pode servir como um exemplo para os outros, mostrando que é possível fazer a diferença, mesmo com pequenas contribuições.</li>
              <li>Ação positiva em um mundo desafiador: Em um mundo cheio de desafios, fazer uma doação é uma maneira tangível de agir positivamente e fazer a sua parte para tornar o mundo um lugar melhor.</li>
            </ul>
          </Text>
        </View>
        <View style={styles.footer1}>
    <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
        <Text style={styles.footerText1}>Feed</Text>
      </TouchableOpacity>
    </View>
      </View>
      );
      }

      function Cadastro({ navigation }) {
        return (
          <View style={{ flex: 1, backgroundColor: '#ffdbc5' }}>
          <View style={{ backgroundColor: '#ff457f', padding: 15, alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: -80 }}>Associação GEGAI</Text>
          </View>
          <View style={{color: 'white' , flexDirection: 'row', justifyContent: 'center', backgroundColor: '#ff6600cb', padding: 10 }}>
    Associação GEGAI
          </View>
    
          <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 35,}}>Faça parte da nossa comunidade</Text>
    
          <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffdbc5', padding: 30 }}>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cadastre sua ONG aqui!</Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <View style={{ marginBottom: 10 }}>
                <Text style={{ marginBottom: 5 }}>ONG</Text>
                <TextInput style={{ padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#0000001c', fontSize: 16 }} placeholder="Digite o nome da ONG" />
              </View>
    
              <View style={{ marginBottom: 10 }}>
                <Text style={{ marginBottom: 5 }}>CNPJ</Text>
                <TextInput style={{ padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#0000001c', fontSize: 16 }} placeholder="Digite o CNPJ" />
              </View>
    
              <View style={{ marginBottom: 10 }}>
                <Text style={{ marginBottom: 5 }}>SENHA</Text>
                <TextInput style={{ padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#0000001c', fontSize: 16 }} placeholder="Digite a senha" secureTextEntry={true} />
              </View>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#ff457f', padding: 15, borderRadius: 10 }}>
              <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer1}>
    <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
        <Text style={styles.footerText1}>Feed</Text>
      </TouchableOpacity>
    </View>
        </View>
        );
        }



const Stack = createNativeStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Feed">
<Stack.Screen name="Feed" component={Feed} />
<Stack.Screen name="Login" component={Login} />
<Stack.Screen name="Postagem" component={Postagem} />
<Stack.Screen name="Doar" component={Doar} />
<Stack.Screen name="Cadastro" component={Cadastro} />
</Stack.Navigator>
</NavigationContainer>
);
}




export default App;







