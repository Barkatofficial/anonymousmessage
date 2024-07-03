import { Html, Font,Preview,Heading,Row,Section,Text,Button, Head } from "@react-email/components";



 interface VerificationEmailProps{
 username:string;
 otp:string;
}

export default function VerificationEmail({username,otp} : VerificationEmailProps){
    return(
        <Html lang='en' dir='dir'>
            <Head>
                <title>Verification Code</title>
                <Font 
                  fontFamily="Roboto" 
                  fallbackFontFamily="Verdana" 
                  webFont={{
                    url:'',
                    format:'woff2',
                  }}
                  fontWeight={400} fontStyle='normal'/>
            </Head>
            <Preview>Here your verification code : {otp}</Preview>
            <Section>
                <Row>
                    <Heading as='h2'>Hello {username}</Heading>
                </Row>
                <Row>
                    <Text>Thank you for registering. Please use the following verification code to complete your registartion:</Text>
                </Row>
                <Row>
                    <Text>{otp}</Text>
                </Row>
                <Row>
                    <Text>
                        If you did not request this code,please ignore this VerificationEmailProps
                    </Text>
                </Row>
            </Section>
        </Html>
    )
}