from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import PassiveAggressiveClassifier
import pickle #learn about pickle
import pandas as pd
from sklearn.model_selection import train_test_split
from apiclient.discovery import build

app = Flask(__name__,template_folder='template')
CORS(app)
tfvect = TfidfVectorizer(stop_words='english', max_df=0.7) #setence laii number convert(max_df ~ more frequency then 0.7 is ignored)
loaded_model = pickle.load(open('api\modal', 'rb'))  # trained model loaded, pickle- model ko extension(save garxa)
df = pd.read_csv('api\dataset_manual_testing.csv')  #dataset frame
x = df['title']  #newss_article
y = df['label']
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state = 0) #training:80 and testing:20 

def fake_news_det(manual_testing):
    tfid_x_train = tfvect.fit_transform(x_train)#english news to number ma convert #kasarii convert gareko xa 
    tfid_x_test = tfvect.transform(x_test)      #number ma convert
    input_data = [manual_testing] 
    vectorized_input_data = tfvect.transform(input_data)     #
    prediction = loaded_model.predict(vectorized_input_data) #funciton arg in model
    return prediction

def verification(msg) :
    api_key = "AIzaSyBEezj1GnfdgYRsUYpZDrIiKPL5okm_EvA"
    resource = build("customsearch", 'v1', developerKey=api_key).cse()
    result = resource.list(q=msg, cx='46134a1bf40d42792').execute()
    return result;

def rand(str):
    length = len(str);
    if(length%2 == 0) :
        return "true";
    
    return "false";

@app.route('/')
def home():
    return "api" ;

@app.route('/predict/<string:msg>', methods=['GET'])
def predict(msg : str):#
    message = msg;  #fetch news article to message.
    # message = "Seven Iranians freed in the prisoner swap have not returned to Iran";
    pred = rand(message)      #predict garera denaxa.
    print(pred)  #pred = fake or real. 
    verified_sites = verification(message)
    result = {
        "article" : message,
        "predict": pred,
        "verified_sites": verified_sites
    }
    return  {"result":result};

if __name__ == '__main__':
    app.run(debug=True)



