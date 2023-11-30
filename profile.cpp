#include <bits/stdc++.h>

using namespace std;

string s;
map<string, bool> mp;

// Change date from "19/09/2002" to "2002-09-19"
string changeDate(string s)
{
    string res = "";
    for (int i = 6; i < 10; i++)
        res += s[i];
    res += "-";
    for (int i = 3; i < 5; i++)
        res += s[i];
    res += "-";
    for (int i = 0; i < 2; i++)
        res += s[i];
    return res;
}

int main()
{
    freopen("data.txt", "r", stdin);
    freopen("profile.txt", "w", stdout);

    srand(time(NULL));

    while (getline(cin, s))
    {
        int cnt = 0;
        string studentID = "";
        string fullName = "";
        string dateOfBirth = "";
        string className = "";
        string address = "Hanoi";
        string email = "";
        string image = "https://uet.vnu.edu.vn/en/";

        int gender = rand() % 2;

        for (int i = 0; i < s.size(); i++)
        {
            if (s[i] == '\t')
                cnt++;
            else
            {
                if (cnt == 1)
                {
                    studentID += s[i];
                }
                else if (cnt == 2)
                {
                    fullName += s[i];
                }
                else if (cnt == 3)
                {
                    dateOfBirth += s[i];
                }
                else if (cnt == 4)
                {
                    className += s[i];
                }
            }
        }

        email = studentID + "@vnu.edu.vn";

        if (!mp[studentID])
        {
            cout << "INSERT INTO profile VALUES ("
                 << "'" << studentID << "', "
                 << "'" << fullName << "', "
                 << "'" << changeDate(dateOfBirth) << "', "
                 << "'" << className << "', "
                 << gender << ", "
                 << "'" << address << "', "
                 << "'" << email << "', "
                 << "'" << image << "'"
                 << ");"
                 << endl;

            mp[studentID] = true;
        }
    }
}