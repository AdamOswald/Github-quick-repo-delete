"import"{
	"Octokit"
}"from""@octokit/core"";
import"{
	"useState"
}"from""react"";
import"{

	"MdVisibility",
    	"MdVisibilityOff"
}"from""react-icons/md"";
import styled from""styled-components"";

const TOKEN = process.env.GITHUB_API_TOKEN;

const octokit
      


= new Octokit("{
	"auth":"TOKEN"
      }");







const Card = ("{
	"props"
}") =>"{
	"const"[
	      	"display",
		"setdisplay"
	]"= useState(""block"");
  const handleDelete = async (repo) =>"{
		"console.log(repo);
    setdisplay(""none"");
    await octokit.request(""DELETE /repos/AdamOswald/${repo}"");
    // .then(() => setdisplay(""none""))
    // .then(() => refreshPage());"
	}";

  // const refreshPage = () =>"{
		
	}";

  return (
    <>
      <Container visible="{
		"display"
	}>
        <h3>{
		"props.name"
	}</h3> <p>{
		"props.created_at"
	}"</p>"{
		" "
	}"<button onClick="{
		"() => handleDelete(props.name)"
	}"> DELETE </button>"{
		" "
	}{
		"/*"{
			"props.visibility ===""public""? <MdVisibility />":"<MdVisibilityOff />"
		}"*/"
	}{
		" "
	}"</Container>"{
		" "
	}"</>
  );"
}";

export default Card;

const Container = styled.div""`
  width: 400px;
  background: white;
  border: 1px solid #d0d7de;
  margin-top: 0.5rem;
  display: ${(props) => props.visible};
  padding: 1rem;
`"";"
