package com.duksiri.duxby.parse;

import com.duksiri.duxby.dto.SubjectDTO;
import com.duksiri.duxby.service.SubjectService;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ClassPathResource;

import java.io.*;

@RequiredArgsConstructor
@Slf4j
public class SubjectCsvParser {

    // 서비스 선언
    private final SubjectService subjectService;

    // csv 파일 resource 경로
    // 아직 수정중...
    ClassPathResource subjectResource = new ClassPathResource("data/subject_data.csv");

    String[] subjectInfo;

    public void readSubjectCSV() {
        try {
            CSVReader csvReader = new CSVReader(new InputStreamReader(new FileInputStream("C:\\Users\\ski03\\subject_data.csv"), "UTF-8"));
            csvReader.readNext();

            do {
                subjectInfo = csvReader.readNext();
                if(subjectInfo != null) {
                    SubjectDTO subjectDTO = new SubjectDTO();

                    subjectDTO.setSubjectCode(subjectInfo[0]);
                    subjectDTO.setGEClassification(subjectInfo[1]);
                    subjectDTO.setCredit(Integer.parseInt(subjectInfo[2]));
                    subjectDTO.setDiscussion(Integer.parseInt(subjectInfo[3]));
                    subjectDTO.setGrade(subjectInfo[4]);
                    subjectDTO.setMajor(subjectInfo[5]);
                    subjectDTO.setPresentation(Integer.parseInt(subjectInfo[6]));
                    subjectDTO.setProfessor(subjectInfo[7]);
                    subjectDTO.setSemester(Integer.parseInt(subjectInfo[8]));
                    subjectDTO.setSubjectClassification(subjectInfo[9]);
                    subjectDTO.setSubjectDifficulty(Float.parseFloat(subjectInfo[10]));
                    subjectDTO.setSubjectName(subjectInfo[11]);
                    subjectDTO.setSubjectRating(Float.parseFloat(subjectInfo[12]));
                    subjectDTO.setTeamPlay(Integer.parseInt(subjectInfo[13]));
                    subjectDTO.setYear(Integer.parseInt(subjectInfo[14]));

                    subjectService.saveSubject(subjectDTO);
                }
            } while(subjectInfo != null);


        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (CsvValidationException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}
