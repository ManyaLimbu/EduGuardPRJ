## EduGaurd - Automated Exam Proctoring tool for Online Exams using Face Recognition

### 🚩 Overview 
During COVID 19 pandemic, online education has become a common norm in schools and colleges, and students themselves are adapted to this online environment of education, as classes are being held in online mode, exams are also conducted online and students tend to cheat in those exams due to lack of security and no physical guarding by professors/teachers which is monitored live, so here is my solution to the problem! Now teachers can monitor students' live even in online mode!



## 🚩Installation/Environment Setup 

  #### Login Credentials 
       professor email - prof1@gmail.com password - 123456
       student email - student2@gmail.com password - 123456
       
  #### 1. Clone App
  
  * Write the following command and press enter.
  
  ```
    $ git clone https://github.com/ShubhangiBatra/EduGaurdPRJ.git
  ```
    
 #### 2. Install node packages
  * Move to the parent/root directory (EduGaurd) cd EduGaurd
  * Write the following command and press enter to download all required node modules.
 
   ```
   $ cd EduGaurd
   $ npm install 
  ```
  
#### 3. Move to Client directory and install Node packages
 * Move to the client folder inside the Rectify folder by cd client
 * Write the following command and press enter to download all required node modules. 
 
 ```
   $ cd client
   $ npm start
 ```

 #### 4. Run Locally
  * Move back to the parent directory by cd..
  * While you are still inside the cloned folder, write the following command to run the website locally.
 
 ```
   $ npm run dev
 ```
 
 
 ###### NOTE: This concurrently runs server and frontend, give a few seconds for frontend to load and the port by default will be ```http://localhost:3000/```
 
 
## 🚩 Future Scopes:-

Feature | Explanation
------------ | -------------
Creating Exam Feature in the application itself| Instead of using a external link(google/microsoft forms),exam creation in the web-application itself would provide more security and better user experience to the product.
Class Management | All class management activities (branch/section wise) separately for every year students, creating assignment in the application itself assigning tasks and keep a record of every student activites individually in different sections.
Video Calling support | Video calling support between students and teacher for quick doubt resolve and better teacher to student interaction


