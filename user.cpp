#include <bits/stdc++.h>

using namespace std;
const int maxN = 5001;

string s;
int stringToInt(string s)
{
    int res = 0;
    for (int i = 0; i < s.size(); i++)
    {
        res = res * 10 + (s[i] - '0');
    }
    return res;
}

map<int, string> studentName;

void processStudentTable(string s)
{
    string tmp = "";
    int pos = 0;

    int num;
    int id;
    string name;

    for (int i = 0; i < s.size(); i++)
    {
        if (s[i] == '\t')
        {
            if (pos == 0)
                num = stringToInt(tmp);
            else if (pos == 1)
                id = stringToInt(tmp);
            else if (pos == 2)
                name = tmp;

            pos++;
            tmp = "";
        }
        else
        {
            tmp += s[i];
        }
    }

    studentName[id] = name;
    // cout << id << " " << name << endl;
}

string ramdomPassword()
{
    string res = "";
    for (int i = 0; i < 6; i++)
    {
        int type = rand() % 2;
        if (type == 0)
        {
            res += (char)(rand() % 10 + '0');
        }
        else
        {
            res += (char)(rand() % 26 + 'a');
        }
    }
    return "'" + res + "'";
}

int main()
{
    freopen("data.txt", "r", stdin);
    freopen("user.sql", "w", stdout);

    srand(time(NULL));

    while (getline(cin, s))
    {
        processStudentTable(s);
    }

    for (auto it = studentName.begin(); it != studentName.end(); it++)
    {
        // cout << it->first << " " << it->second << endl;
        cout << "INSERT INTO user VALUES (" << it->first << ", '" << it->first << "', " << ramdomPassword() << ");" << endl;
    }

    return 0;
}