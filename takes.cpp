#include <bits/stdc++.h>

using namespace std;

string s;

string grade[] = {"F", "D", "D+", "C", "C+", "B", "B+", "A", "A+"}; // sz = 9

int stringToInt(string s)
{
    int res = 0;
    for (int i = 0; i < s.size(); i++)
    {
        res = res * 10 + (s[i] - '0');
    }
    return res;
}

struct Data
{
    string studentID;
    string courseID;
    string sectionID;
    string grade;
};

vector<Data> takes;

string getGrade(string ID)
{
    // 5% of students get 0.0
    // 5% of students get 1.0
    // 5% of students get 1.5
    // 10% of students get 2.0
    // 18% of students get 2.5
    // 25% of students get 3.0
    // 20% of students get 3.5
    // 8% of students get 3.7
    // 3% of students get 4.0

    if (ID == "22026512" || ID == "22026523" || ID == "22026519")
        return grade[8];

    int x = rand() % 100;
    if (x < 5)
        return grade[0];
    else if (x < 10)
        return grade[1];
    else if (x < 15)
        return grade[2];
    else if (x < 25)
        return grade[3];
    else if (x < 43)
        return grade[4];
    else if (x < 68)
        return grade[5];
    else if (x < 88)
        return grade[6];
    else if (x < 96)
        return grade[7];
    return grade[8];
}

void processTakesTable(string s)
{
    string tmp = "";
    int pos = 0;

    string studentID;
    string courseID;
    string sectionID;
    string courseIDWithoutCLC;
    string grade;

    for (int i = 0; i < s.size(); i++)
    {
        if (s[i] == '\t')
        {
            if (pos == 1)
                studentID = tmp;
            else if (pos == 5)
            {
                courseID = tmp;

                if (courseID.size() >= 5 && courseID.substr(courseID.size() - 5, 5) == "(CLC)")
                {
                    courseIDWithoutCLC = courseID.substr(0, courseID.size() - 6);
                }
                else
                {
                    courseIDWithoutCLC = courseID;
                }

                for (int j = courseIDWithoutCLC.size() - 1; j >= 0; j--)
                {
                    if (courseIDWithoutCLC[j] >= '0' && courseIDWithoutCLC[j] <= '9')
                    {
                        sectionID = courseIDWithoutCLC[j] + sectionID;
                    }
                    else
                    {
                        break;
                    }
                }
            }

            pos++;
            tmp = "";
        }
        else
        {
            tmp += s[i];
        }
    }

    grade = getGrade(studentID);
    if (sectionID == "")
        sectionID = "0";

    takes.push_back({studentID, courseID, sectionID, grade});

    // cout << studentID << " " << courseID << " " << sectionID << " " << grade << endl;
}

int main()
{
    freopen("data.txt", "r", stdin);
    freopen("takes.sql", "w", stdout);

    while (getline(cin, s))
    {
        processTakesTable(s);
    }

    for (Data i : takes)
    {
        cout << "INSERT INTO takes VALUES ("
             << "'" << i.studentID << "', "
             << "'" << i.courseID << "', "
             << "'" << i.sectionID << "', "
             << 2023 << ", "
             << 1 << ", "
             << "'" << i.grade << "', 'Môn học rất thú vị" << "');"
             << endl;
    }

    return 0;
}