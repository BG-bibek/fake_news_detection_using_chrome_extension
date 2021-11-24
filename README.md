# fake_news_detection_using_chrome_extension

ABSTRACT

In the present world, millions of information have been consumed every day from
different sources, among which most of them are not authenticated. The existing
extensions verify whether the selected article is fake or real but does not provide any
cross-reference. To overcome such a problem, Fake news detector, A chrome
extension is designed which is a browser extension for Google chrome. It identifies
news credibility with supporting cross-reference. Authentication requires numerous
manpower and consumes much time to perform the task. For this, an ML model is
introduced to identify the authenticity of the news article, and to support its decision,
references on a similar article are provided through different trusted sites. To clearly
understand the system and its flow, agile methodology with unified modeling
language design is practiced. This project aims to develop a chrome extension that is
reliable and easy to detect the authentication of the article. The proposed system takes
input from the users, processes that article through the Machine learning module then
displays the output with the list of trusted sites if that particular article is valid. A
simple user interface is applied to the system to enhance the user’s performance while
surfing through the internet. The limitation of this system is tested through various
testing methods, the results of the project are mentioned. Overall the project is
concluded at the end and the future work is highlighted.

Discussion

In this project, different ML models have been trained and tested. Since the
LinearSVC model has the highest accuracy on the given dataset among the other ML
models with approx. 96%. LinearSVC model is selected to use for detecting the
fakeness of the news article. LinearSVC is well-known for its nonlinear input space
kernel technique. Which offers very high accuracy compared to other classifiers. An
input data space is transformed into the appropriate form using a kernel. As it creates
a hyper plane that draws right in between the negative and the positive result, for
now, the chrome extension is connected to the backend part i.e. the detection model
and cross-referencing feature. With the help of API. Which is hosted locally. In the
future, the API will be hosted in a cloud server. The user input text is submitted to
the backend by using the GET method request. The result of the model with the
cross-reference of that article is received by the frontend part in the form of JSON.
The cross-reference features were accomplished by using Google’s custom search
API. The trustworthy sites such as BBC, C-SPAN, The Economist, Kanpur, etc. The
uniqueness of this project is its cross-referencing features. End-users can reference
the same or similar article from the trusted sites.


