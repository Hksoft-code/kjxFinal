import React,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CareerForm = () => {
  const {apply,applyID} = useParams()
  const [emailExists, setEmailExists] = useState('');
  const [numberExists, setNumberExists] = useState('');
  const [qualification, setQualification] = useState("")
  const [loading, setLoading] = useState(false);
  // const [title, setTitle] = useState("Apply")

  // console.log(_id)
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        number:'',
        message:'',
        file: null,
      });
    
  const handle = (e) =>{
    setQualification(e.target.value)
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        // Process the selected file (e.g., validate type)

        if (selectedFile) {
            const allowedFileTypes = ['.pdf', '.doc', '.docx'];
            const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
            
            if (allowedFileTypes.includes(`.${fileExtension}`)) {
                setFormData({ ...formData, file: selectedFile });
            } else {
              alert('Invalid file type. Please select a PDF, DOC, or DOCX file.');
            }
          }
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
    
        const { name, number, email,file, message } = formData;
    
        if (name && number && email && file && qualification,message) {
            const data = new FormData();
            data.append("name", name);
            data.append("number", number);
            data.append("email", email);
            data.append("qualification",qualification)
            data.append("message",message)
            data.append("cv", file);
    
            try {
                const response = await axios.post(`https://kj-x-softtech-api.onrender.com/api/v2/applicant/new/${applyID}`, data,{
                  headers: {
                    'Content-Type': `multipart/form-data`,
                  }
                });
                console.log(response);
            } catch (error) {
                console.log(error.message);
            }finally{
              setLoading(false)
            }
        } else {
            console.log("Invalid form data. Check your inputs.");
        }
    };
    

  return (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Title>
                {apply}
            </Title>
            <Label>
                <Span>Full Name*</Span>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter Full Name"/>
            </Label>
            <Label>
                <Span>Email Address*</Span>
                <Input
                    id="name"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    type="email" 
                    placeholder="Enter Email Address"/>
                    <span>{emailExists}</span>
            </Label>
            <Label>
                <Span>Phone Number</Span>
                <Input
                    id="name"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    required
                    type="number" 
                    placeholder="Enter Phone Number"/>
                    <span>{numberExists}</span>
            </Label>
            <Qualification>
                <Span>Qualification</Span>
                    <select
                    name="qualification"
                    value={qualification}
                    onChange={handle}
                    >
										<option value="">..</option>
										<option value="Bachelor of Computer Application">Bachelor of Computer Application </option>
										<option value="Advanced diploma in Dredging technology">Advanced diploma in Dredging technology</option>
										<option value="Appreciation Programme on Citizen Journalism">Appreciation Programme on Citizen Journalism</option>
										<option value="Bachelor in Hotel Management	">Bachelor in Hotel Management</option>
										<option value="Bachelor of Architecture	">Bachelor of Architecture</option>
										<option value="Bachelor of Architecture Interior Design	">Bachelor of Architecture Interior Design</option>
										<option value="Bachelor of Arts &amp; Bachelor of Law">Bachelor of Arts &amp; Bachelor of Law</option>
										<option value="Master of Computer Application">Master of Computer Application </option>
										<option value="Bachelor of Audiology and Speech Language Pathology">Bachelor of Audiology and Speech Language Pathology </option>
										<option value="Bachelor of Ayurvedic Medicine &amp; Surgery">Bachelor of Ayurvedic Medicine &amp; Surgery</option>
										<option value="Bachelor of Business Adminsitration">Bachelor of Business Adminsitration</option>
										<option value="Bachelor of Business Management">Bachelor of Business Management </option>
										<option value="Bachelor of Business Studies">Bachelor of Business Studies</option>
										<option value="Bachelor of Commerce (General)">Bachelor of Commerce (General) </option>
										<option value="Bachelor of Commerce (Honors)">Bachelor of Commerce (Honors) </option>
										<option value="Bachelor of Commerce (Professional)">Bachelor of Commerce (Professional) </option>
										<option value="Bachelor of Commerce Accountancy">Bachelor of Commerce Accountancy </option>
										<option value="Bachelor of Commerce Accounting and Finance">Bachelor of Commerce Accounting and Finance </option>
										<option value="Bachelor of Commerce Banking &amp; Insurance">Bachelor of Commerce Banking &amp; Insurance</option>
										<option value="Bachelor of Commerce Banking and Finance">Bachelor of Commerce Banking and Finance</option>
										<option value="Bachelor of Commerce Business Economics">Bachelor of Commerce Business Economics </option>
										<option value="Bachelor of Commerce Corporate Law">Bachelor of Commerce Corporate Law</option>
										<option value="Bachelor of Commerce Economics">Bachelor of Commerce Economics </option>
										<option value="Bachelor of Commerce Vocational">Bachelor of Commerce Vocational </option>
										<option value="Bachelor of Computer Application">Bachelor of Computer Application </option>
										<option value="Bachelor of Dental Surgery">Bachelor of Dental Surgery</option>
										<option value="Bachelor of Education	">Bachelor of Education </option>
										<option value="Bachelor of Education (English)">Bachelor of Education (English) </option>
										<option value="Bachelor of Engineering">Bachelor of Engineering </option>
										<option value="Bachelor of Financial &amp; Investment Analysis">Bachelor of Financial &amp; Investment Analysis</option>
										<option value="Bachelor of Fine Art">Bachelor of Fine Art</option>
										<option value="Bachelor of Home Science Apparel Production &amp; Management">Bachelor of Home Science Apparel Production &amp; Management</option>
										<option value="Bachelor of Home Science Journalism &amp; Mass Communication">Bachelor of Home Science Journalism &amp; Mass Communication</option>
										<option value="Bachelor of Home Science Organization &amp; Management of Early Childhood Programmes">
											Bachelor of Home Science Organization &amp; Management of Early Childhood Programmes
										</option>
										<option value="Bachelor of Homoeopathic Medicine &amp; Surgery">Bachelor of Homoeopathic Medicine &amp; Surgery</option>
										<option value="Bachelor of Journalism &amp; Mass Communication (Honors)">Bachelor of Journalism &amp; Mass Communication (Honors)</option>
										<option value="Bachelor of Law &amp; Master of Law">Bachelor of Law &amp; Master of Law </option>
										<option value="Bachelor of Law (General)">Bachelor of Law (General)</option>
										<option value="Bachelor of Law (Special)">Bachelor of Law (Special)</option>
										<option value="Bachelor of Legal Science and Bachelor of Law">Bachelor of Legal Science and Bachelor of Law</option>
										<option value="Bachelor of Library Science">Bachelor of Library Science</option>
										<option value="Bachelor of Management Studies">Bachelor of Management Studies </option>
										<option value=">Bachelor of Management Studies (Honors)">Bachelor of Management Studies (Honors)</option>
										<option value="Bachelor of Mass Media">Bachelor of Mass Media</option>
										<option value="Bachelor of Medicine &amp; Bachelor of Surgery">Bachelor of Medicine &amp; Bachelor of Surgery</option>
										<option value="Bachelor of Optometry">Bachelor of Optometry</option>
										<option value="Bachelor of Performing Arts (Dance)">Bachelor of Performing Arts (Dance)</option>
										<option value="Bachelor of Pharmacy">Bachelor of Pharmacy</option>
										<option value="Bachelor of Physical Educatio">Bachelor of Physical Education </option>
										<option value="Bachelor of Science (Agriculture Biotechnology)">Bachelor of Science (Agriculture Biotechnology)</option>
										<option value="Bachelor of Science ">Bachelor of Science </option>
										<option value="Bachelor of Technology">Bachelor of Technology</option>
										<option value="Bachelor of Unani Medicine and Surgery">Bachelor of Unani Medicine and Surgery</option>
										<option value="Bachelor of Visual Arts">Bachelor of Visual Arts</option>
										<option value="Diploma">Diploma</option>
										<option value="Doctor of Medicine ">Doctor of Medicine </option>
										<option value="Doctor of Philosophy">Doctor of Philosophy</option>
										<option value="Doctorate in Agriculture">Doctorate in Agriculture</option>
										<option value="Doctorate in Fisheries">Doctorate in Fisheries</option>
										<option value="Doctorate in Agriculture Engineering">Doctorate in Agriculture Engineering</option>
										<option value="Doctorate in Microbiology	Four years	M.Sc. Microbiology">Doctorate in Microbiology </option>
										<option value="Doctorate in Veterinary Science and Animal Husbandary">Doctorate in Veterinary Science and Animal Husbandary</option>
										<option value="Doctrate in Medicine Pulmonary Medicine">Doctrate in Medicine Pulmonary Medicine </option>
										<option value="Entrepreneurial Master of Business Administration">Entrepreneurial Master of Business Administration</option>
										<option value="Integrated Bachelor of Arts and Bachelor of Law">Integrated Bachelor of Arts and Bachelor of Law </option>
										<option value="Integrated Master of Business Administration">Integrated Master of Business Administration</option>
										<option value="Integrated Master of Philosophy and Doctor of Philosophy English">Integrated Master of Philosophy and Doctor of Philosophy English</option>
										<option value="Integrated Master of Philosophy and Doctor of Philosophy Management">Integrated Master of Philosophy and Doctor of Philosophy Management </option>
										<option value="Integrated Master of Tourism Administration">Integrated Master of Tourism Administration </option>
										<option value="Integrated Masters in Life Science">Integrated Masters in Life Science</option>
										<option value="Master of Agricultural ">Master of Agricultural </option>
										<option value="Master of Arts">Master of Arts</option>
										<option value="Master of Commerce">Master of Commerce</option>
										<option value="Master of Engineering">Master of Engineering</option>
										<option value="Master of Financial Management">Master of Financial Management</option>
										<option value="Master of Human Resource">Master of Human Resource</option>
										<option value="Other" >Other</option>
                    <option value="Master of Pharmacy ">Master of Pharmacy Master of Pharmacy </option>
										
									</select>
            </Qualification>
            <Label>
                <Span>Message</Span>
                <Textarea
                    id="name"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    type="text" 
                    placeholder="Enter Message"/>
            </Label>
            <Label>
                 <FileInput type="file" id="fileUpload" accept=".pdf, .doc, .docx" onChange={handleFileChange} />
                 <FileInputLabel htmlFor="fileUpload">Upload File type : ['.pdf', '.doc', '.docx']</FileInputLabel>
             </Label>
             <a href="/careers">
            <Button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
            </a>
        </Form>
    </Container>
  )
}

export default CareerForm


const FileInput = styled.input`
  display: block;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border-radius: 4px;
`;

const FileInputLabel = styled.label`
`;

const Qualification = styled.div`
    width:90%;
    height:80px;
    display:flex;
    flex-direction:column;
    color:lightgrey;
    margin-bottom:15px;
    // background:red;

    select{
      height:100%;

      option{
        padding:20px 0px;
      }
    }
`

const Button = styled.button`
    width:100px;
    height:40px;
    border:none;
    border-radius: 50px;
    color:#fff;
    font-weight:bold;
    margin-top: 20px;
    cursor:pointer;
    background:linear-gradient(110.92deg, #FF900D 8.54%, #F08200 91.46%);

    a{
      text-decoration:none;
      color:#000;
    }
`

const Textarea = styled.textarea`
    height:150px;
    border-radius:5px;
    outline:none;
    border:none;
    font-size:15px;
    background-color:transparent;
    color:#000;
    box-shadow:0px 0px 5px lightgray;
    padding-left:10px;
`

const Input = styled.input`
    height:40px;
    border-radius:5px;
    outline:none;
    border:none;
    font-size:15px;
    background-color:transparent;
    color:#000;
    box-shadow:0px 0px 5px lightgray;
    padding-left:10px;
`

const Span = styled.span`
    font-size:15px;
    margin-bottom:10px;
`

const Label = styled.label`
    width:90%;
    display:flex;
    flex-direction:column;
    color:lightgrey;
    margin-bottom:15px;
`

const Title = styled.div`
    font-size: 25px;
    font-weight: 500;
    color: #302f2f;
    margin-bottom: 20px;
`

const Form = styled.form`
    width:80vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    background-color:white;
    padding:20px 20px;    
    border:1px solid lightgray;
    box-shadow:0px 0px 5px lightgray;
    
    @media (min-width:767px){
      width:40vw;
    }
`

const Container = styled.div`
    width: 100%;
    padding:40px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background:#fff;
`